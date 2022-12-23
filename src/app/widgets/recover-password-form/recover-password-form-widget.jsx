import { Form, Button } from 'react-bootstrap';
import './recover-password-form-widget.scss'
import logoDibba from '../../../assets/images/logo_login.png'
import NotificationService from "../../../services/notification-service";
import { NOTIFICATION_MSG_TYPE } from "../../../common/variables";

export const RecoverPasswordWidget = props => {

    const notificationService = new NotificationService();

    return (
        <Form className="recover-password-form">
            <div className="logo mb-5">
                <img src={logoDibba} alt="Logo Dibba" />
            </div>

            <Form.Control className="form-input mb-3" type="email" placeholder="Insira seu email" />
 
            <Button className="mt-3 recover" onClick={() => {notificationService.add(NOTIFICATION_MSG_TYPE.ERROR, "Essa funcionalidade ainda não está disponível")}}>
                Recuperar senha
            </Button>
        </Form>
    )
}