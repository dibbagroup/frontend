import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './sign-up-form-widget.scss'
import logoDibba from "../../../assets/images/logo_login.png"

export const SignUpFormWidget = props => {

    const [inputDateType, setInputDateType] = useState("text")

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordType, setShowPasswordType] = useState("password")

    const [confirmShowPassword, setConfirmShowPassword] = useState(false)
    const [confirmShowPasswordType, setConfirmShowPasswordType] = useState("password")

    function handleShowPassword() {
        if (showPassword === false) {
            console.log("viu senha")
            setShowPassword(true)
            setShowPasswordType("text")
        } else {
            console.log("deixou de ver senha")
            setShowPassword(false)
            setShowPasswordType("password")
        }
    }

    function handleShowConfirmPassword() {
        if (confirmShowPassword === false) {
            setConfirmShowPassword(true)
            setConfirmShowPasswordType("text")
        } else {
            setConfirmShowPassword(false)
            setConfirmShowPasswordType("password")
        }
    }

    return (
        <Form className="sign-up-form">
            <div className="logo mb-3">
                <img src={logoDibba} alt="Logo Dibba" />
            </div>
            <Form.Text className="title">
                Seja bem-vindo!
            </Form.Text>
            <Form.Text className="mb-3 subtitle">
                Faça seu cadastro para continuar.
            </Form.Text>
            <Form.Control type="email" className="form-input mb-2" placeholder="Email" />
            <Form.Control type="text" className="form-input mb-2" placeholder="CPF" />
            <Form.Control type={inputDateType} className="form-input mb-2" placeholder="Data de Nascimento" onFocus={() => { setInputDateType("date") }} />
            <div className="eye-password"><i className="fi fi-rs-eye" onClick={() => { handleShowPassword() }}></i></div>
            <Form.Control type={showPasswordType} className="form-input mb-2" placeholder="Senha" />
            <div className="eye-password"><i className="fi fi-rs-eye" onClick={() => { handleShowConfirmPassword() }}></i></div>
            <Form.Control type={confirmShowPasswordType} className="form-input mb-2" placeholder="Confirme sua Senha" />
            <Form.Group className="terms">
                <Form.Check type="checkbox" className="check" />
                <Form.Text className="terms-text">Concordo com os termos de privacidade</Form.Text>
            </Form.Group>
            <Button className="mt-4" type="submit">
                Criar Conta
            </Button>
        </Form>
    )
}

/* usestate true e false */