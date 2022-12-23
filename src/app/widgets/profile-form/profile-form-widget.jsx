import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './profile-form-widget.scss'
import { useEffect } from "react"
import AuthService from '../../../services/auth-service';

export const ProfileFormWidget = ({ user }) => {
    const [wantToEdit, setWantToEdit] = useState(false)
    const [userInfos, setUserInfos] = useState(user)
    const [containError, setContainError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    function saveFunction() {
        if (stringsAreEmpy([userInfos.firstName, userInfos.lastName, userInfos.docNumber, userInfos.emailAddress])) {
            setContainError(true)
            setErrorMessage("Some fields are empty")
            return
        }

        sessionStorage.setItem(process.env.REACT_APP_SESSION_STORAGE_USER_KEY, JSON.stringify(userInfos))
        setUserInfos(JSON.parse(sessionStorage.getItem(process.env.REACT_APP_SESSION_STORAGE_USER_KEY)))
        setWantToEdit(false)
    }

    const stringsAreEmpy = (list = []) => {
        list.forEach((s) => {
            if (s.trim() === '') {
                return true
            }
        })

        return false
    }

    return (
        <div className="profile-form w-75">
            <div className="title">
                <h4>Seus dados</h4>

                {
                    wantToEdit ?
                        <small className='text-danger' onClick={() => { setWantToEdit(false) }}>Cancelar</small> :
                        <small onClick={() => { setWantToEdit(true) }}>Editar</small>
                }
            </div>

            <Row md={2}>
                <Col><Form.Control
                    className="form-input mb-3"
                    type="text"
                    disabled={wantToEdit ? false : true}
                    value={userInfos.firstName}
                    onChange={({ target }) => {
                        setUserInfos({
                            ...userInfos,
                            firstName: target.value
                        })
                    }} /></Col>

                <Col><Form.Control
                    className="form-input mb-3"
                    type="text"
                    disabled={wantToEdit ? false : true}
                    value={userInfos.lastName}
                    onChange={({ target }) => {
                        setUserInfos({
                            ...userInfos,
                            lastName: target.value
                        })
                    }}
                /></Col>

                <Col>
                    <Form.Control
                        className="form-input mb-3"
                        type="text"
                        disabled={wantToEdit ? false : true}
                        value={userInfos.docNumber}
                        onChange={({ target }) => {
                            setUserInfos({
                                ...userInfos,
                                docNumber: target.value
                            })
                        }}
                    />
                </Col>

                <Col>
                    <Form.Control
                        className="form-input mb-3"
                        type="text"
                        disabled={wantToEdit ? false : true}
                        value={userInfos.emailAddress}
                        onChange={({ target }) => {
                            setUserInfos({
                                ...userInfos,
                                emailAddress: target.value
                            })
                        }}
                    />
                </Col>

                <Col>
                    <Form.Control
                        className="form-input mb-3"
                        type="text"
                        disabled={wantToEdit ? false : true}
                        value={userInfos.phone}
                        onChange={({ target }) => {
                            setUserInfos({
                                ...userInfos,
                                phone: target.value
                            })
                        }}
                    /></Col>

                <Col>
                    <Button
                        className="mb-3"
                        width={2}
                        onClick={() => { saveFunction() }}
                        disabled={wantToEdit ? false : true}>Salvar</Button>
                </Col>
            </Row>
        </div>
    )
}