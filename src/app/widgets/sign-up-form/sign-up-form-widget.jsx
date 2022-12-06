import { Form, Button } from 'react-bootstrap';
import './sign-up-form-widget.scss'

export const SignUpFormWidget = props => {
    return (
        <Form>
            <Form.Text className="greeting">
                Seja bem-vindo!
            </Form.Text>
            <Form.Text className="mb-5 motivate">
                Faça seu cadastro para continuar
            </Form.Text>
            <Form.Control className="form-input mb-3" type="email" placeholder="Email" />
            <Form.Control className="form-input mb-3" type="text" placeholder="CPF" />
            <Form.Control className="form-input mb-3" type="date" placeholder="data de nascimento" />
            <Form.Control className="form-input mb-3" type="password" placeholder="Senha" />
            <Form.Group className="terms">
                <Form.Check type="checkbox" className="check" label="Concordo com os termos" />
            </Form.Group>
            <Button className="mt-2 login" type="submit">
                Criar Conta
            </Button>
        </Form>
    )
}