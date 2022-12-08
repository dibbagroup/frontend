import { Form, Button } from 'react-bootstrap';
import './sign-in-form-widget.scss'
import logoDibba from '../../../assets/images/logo_login.png'

export const SignInFormWidget = props => {
    return (
        <Form>
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
            <Form.Control className="form-input mb-3" type="password" placeholder="Senha" />
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