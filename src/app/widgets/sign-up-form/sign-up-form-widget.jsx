import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './sign-up-form-widget.scss'
import logoDibba from "../../../assets/images/logo_login.png"

export const SignUpFormWidget = props => {

    const [inputDateType, setInputDateType] = useState("text")

    const [passwordSee, setPasswordSee] = useState(false)
    const [confirmPasswordSee, setConfirmPasswordSee] = useState(false)
    const [passwordSeeType, setPasswordSeeType] = useState("password")
    const [confirmPasswordSeeType, setConfirmPasswordSeeType] = useState("password")

    function showPassword(){
        if(passwordSee === false){
            console.log("viu senha")
            setPasswordSee(true)            
            setPasswordSeeType("text")
        } else{
            console.log("deixou de ver senha")
            setPasswordSee(false)
            setPasswordSeeType("password")
        }
    }

    function showConfirmPassword(){
        if(confirmPasswordSee === false){
            setConfirmPasswordSee(true)            
            setConfirmPasswordSeeType("text")
        } else{
            setConfirmPasswordSee(false)
            setConfirmPasswordSeeType("password")
        }
    }

    return (
        <Form className="sign-up-form">
            <div className="logo mb-3">
                <img src={logoDibba} alt="Logo Dibba" />
            </div>
            <Form.Text className="greeting">
                Seja bem-vindo!
            </Form.Text>
            <Form.Text className="mb-3 motivate">
                Faça seu cadastro para continuar
            </Form.Text>
            <Form.Control type="email" className="form-input mb-2" placeholder="Email" />
            <Form.Control type="text" className="form-input mb-2" placeholder="CPF" />
            <Form.Control type={inputDateType} className="form-input mb-2" placeholder="Data de Nascimento" onFocus={()=> {setInputDateType("date")}} />
            <div className="eye-password"><i className="fi fi-rs-eye" onClick={()=> {showPassword()}}></i></div>
            <Form.Control type={passwordSeeType} className="form-input mb-2" placeholder="Senha" />
            <div className="eye-password"><i className="fi fi-rs-eye" onClick={()=> {showConfirmPassword()}}></i></div>
            <Form.Control type={confirmPasswordSeeType} className="form-input mb-2" placeholder="Confirme sua Senha" />
            <Form.Group className="terms">
                <Form.Check type="checkbox" className="check" />
                <Form.Text className="terms-text">Concordo com os termos de privacidade</Form.Text>
            </Form.Group>
            <Button className="mt-2 newAcc" type="submit">
                Criar Conta
            </Button>
        </Form>
    )
}

/* usestate true e false */