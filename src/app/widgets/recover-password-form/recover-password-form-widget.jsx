import { Form, Button } from 'react-bootstrap';
import './recover-password-form-widget.scss'
import logoDibba from '../../../assets/images/logo_login.png'

export const RecoverPasswordWidget = props => {
    return (
        <Form className="recover-password-form">
            <div className="logo mb-5">
                <img src={logoDibba} alt="Logo Dibba" />
            </div>

            <Form.Control className="form-input mb-3" type="text" placeholder="Insira seu email" />
 
            <Button className="mt-3 recover" type="submit">
                Recuperar senha
            </Button>
        </Form>
    )
}