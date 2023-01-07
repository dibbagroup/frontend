import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './sign-up-form-widget.scss'
import logoDibba from "../../../assets/images/logo_login.png"
import AuthService from '../../../services/auth-service';
import NotificationService from "../../../services/notification-service";
import { NOTIFICATION_MSG_TYPE } from "../../../common/variables";

export const SignUpFormWidget = props => {

    const registerService = new AuthService()
    const notificationService = new NotificationService();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [cpf, setCpf] = useState("")

    const [inputDateType, setInputDateType] = useState("text")

    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordType, setShowPasswordType] = useState("password")

    const [confirmShowPassword, setConfirmShowPassword] = useState(false)
    const [confirmShowPasswordType, setConfirmShowPasswordType] = useState("password")

    function handleShowPassword() {
        if (showPassword === false) {
            setShowPassword(true)
            setShowPasswordType("text")
        } else {
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
            <Form.Text className="title" onClick={() => { registerService.signUp(firstName, lastName, phone, email, password, birthDate, cpf) }}>
                Seja bem-vindo!
            </Form.Text>
            <Form.Text className="mb-3 subtitle">
                Faça seu cadastro para continuar.
            </Form.Text>
            <Form.Group className="flex">
                <Form.Control type="text" className="form-input mb-2" placeholder="Primeiro Nome" onChange={(e) => setFirstName(e.target.value)} required />
                <Form.Control type="text" className="form-input mb-2" placeholder="Último Nome" onChange={(e) => setLastName(e.target.value)} required />
            </Form.Group>
            <Form.Control type="email" className="form-input mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <Form.Control type="text" className="form-input mb-2" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} required />
            <Form.Group className="flex">
                <Form.Control type="tel" className="form-input mb-2" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} required />
                <Form.Control type={inputDateType} className="form-input mb-2" placeholder="Data de Nascimento" onFocus={() => { setInputDateType("date") }} onChange={(e) => setBirthDate(e.target.value)} required />
            </Form.Group>
            <Form.Group className="flex">
                <div className="input-password">
                    <Form.Control type={showPasswordType} className="form-input mb-2" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                    <div className="eye-password"><i className="fi fi-rs-eye" onClick={() => { handleShowPassword() }}></i></div>
                </div>
                <div className="input-password">
                    <Form.Control type={confirmShowPasswordType} className="form-input mb-2" placeholder="Confirme sua Senha" required />
                    <div className="eye-password"><i className="fi fi-rs-eye" onClick={() => { handleShowConfirmPassword() }}></i></div>
                </div>
            </Form.Group>
            <Form.Group className="terms mt-2">
                <Form.Check type="checkbox" className="check" />
                <Form.Text className="terms-text">Concordo com os termos de privacidade</Form.Text>
            </Form.Group>
            <Button className="mt-3" /* onClick={()=> {registerService.signUp(firstName, lastName, phone, email, password, birthDate, cpf)}} */ onClick={() => { notificationService.consume(NOTIFICATION_MSG_TYPE.ERROR, "Desculpe, essa funcionalidade ainda não está disponivel") }}>
                Criar Conta
            </Button>
        </Form>
    )
}