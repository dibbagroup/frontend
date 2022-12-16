import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './recover-password-form-widget.scss'
import logoDibba from '../../../assets/images/logo_login.png'

export const RecoverPasswordWidget = props => {

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordType, setShowPasswordType] = useState("password")

    const [confirmShowPassword, setConfirmShowPassword] = useState(false)
    const [confirmShowPasswordType, setConfirmShowPasswordType] = useState("password")

    function handleShowPassword(){
        if(showPassword === false){
            setShowPassword(true)            
            setShowPasswordType("text")
        } else{
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
        <Form className="recover-password-form">
            <div className="logo mb-5">
                <img src={logoDibba} alt="Logo Dibba" />
            </div>

            <div className="eye-password"><i className="fi fi-rs-eye" onClick={() => { handleShowPassword() }}></i></div>                        
            <Form.Control className="form-input mb-3" type={showPasswordType} placeholder="Sua nova senha" />
            <div className="eye-password"><i className="fi fi-rs-eye" onClick={() => { handleShowConfirmPassword() }}></i></div>
            <Form.Control className="form-input mb-3" type={confirmShowPasswordType} placeholder="Confirme sua nova senha" />
 
            <Button className="mt-3 recover" type="submit">
                Recuperar Senha
            </Button>
        </Form>
    )
}