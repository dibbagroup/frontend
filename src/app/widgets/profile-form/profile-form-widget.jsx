import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './profile-form-widget.scss'

export const ProfileFormWidget = props => {
    
    const [wantToEdit, setWantToEdit] = useState(false)

    function saveFunction(){
        console.log("teste")
    }

    return (
        <div className="profile-form">
            <div className="title">
                <h4>Seus dados</h4>

                <small onClick={() => {setWantToEdit(!wantToEdit)}}>Editar</small>
            </div>

            <Form>
                <Form.Group>
                    <Form.Control className="form-input mb-3" type="text" placeholder="Informação do User" disabled={!wantToEdit} />
                    <Form.Control className="form-input mb-3" type="text" placeholder="Informação do User" disabled={!wantToEdit} />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="form-input mb-3" type="text" placeholder="Informação do User" disabled={!wantToEdit} />
                    <Form.Control className="form-input mb-3" type="text" placeholder="Informação do User" disabled={!wantToEdit} />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="form-input mb-3" type="text" placeholder="Informação do User" disabled={!wantToEdit} />

                    {wantToEdit ? 
                    <Button className="mb-3" onClick={() => {saveFunction()}}>Salvar</Button>
                    : null }

                    {!wantToEdit ? 
                    <Button className="mb-3" disabled>Salvar</Button>
                    : null }

                </Form.Group>
            </Form>
        </div>
    )
}