import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './sign-in-form-widget.scss'
import logoDibba from '../../../assets/images/logo_login.png'

export const SignInFormWidget = props => {

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordType, setShowPasswordType] = useState("password")

    function handleShowPassword(){
        if(showPassword === false){
            console.log("viu senha")
            setShowPassword(true)            
            setShowPasswordType("text")
        } else{
            console.log("deixou de ver senha")
            setShowPassword(false)
            setShowPasswordType("password")
        }
    }

    return (
        <Form className="sign-in-form">
            <div className="logo mb-4">
                <img src={logoDibba} alt="Logo Dibba" />
            </div>
            <Form.Text className="greeting">
                Seja bem-vindo!
            </Form.Text>
            <Form.Text className="mb-5 motivate">
                Faça seu login para continuar.
            </Form.Text>
            <Form.Control className="form-input mb-3" type="email" placeholder="Email ou CNPJ da empresa" />
            <div className="eye-password"><i className="fi fi-rs-eye" onClick={()=> {handleShowPassword()}}></i></div>
            <Form.Control type={showPasswordType} className="form-input mb-3" placeholder="Senha" />
            <Form.Text className="recover-password mb-3">
                <a href="/">Esqueceu a senha?</a>
            </Form.Text>
            <Button className="mb-2 login" type="submit">
                Entrar
            </Button>
            <div>
                <div>
                    <hr />
                </div>
                <Form.Text className="option">
                    ou
                </Form.Text>
                <div>
                    <hr />
                </div>
            </div>
            <Button className="mt-2 with-google" type="submit">
                Entrar com Google
            </Button>
        </Form>
    )
}