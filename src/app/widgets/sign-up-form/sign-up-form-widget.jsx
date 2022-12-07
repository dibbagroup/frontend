import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './sign-up-form-widget.scss'

export const SignUpFormWidget = props => {

    const [inputDateType, setInputDateType] = useState("text")

    return (
        <Form className="sign-up-form">
            <Form.Text className="greeting">
                Seja bem-vindo!
            </Form.Text>
            <Form.Text className="mb-5 motivate">
                Faça seu cadastro para continuar
            </Form.Text>
            <Form.Control type="email" className="form-input mb-3" placeholder="Email" />
            <Form.Control type="text" className="form-input mb-3" placeholder="CPF" />
            <Form.Control type={inputDateType} className="form-input mb-3" placeholder="Data Inicial" onFocus={()=> {setInputDateType("date")}} />
            <Form.Control type="password" className="form-input mb-3" placeholder="Senha" />
            <Form.Group className="terms">
                <Form.Check type="checkbox" className="check" />
                <Form.Text className="terms-text">Concordo com os termos de privacidade</Form.Text>
            </Form.Group>
            <Button className="mt-3 newAcc" type="submit">
                Criar Conta
            </Button>
        </Form>
    )
}