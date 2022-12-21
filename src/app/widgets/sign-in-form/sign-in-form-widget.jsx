import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./sign-in-form-widget.scss";
import logoDibba from "../../../assets/images/logo_login.png";
import AuthService from "../../../services/auth-service";
import NotificationService from "../../../services/notification-service";
import { NOTIFICATION_MSG_TYPE } from "../../../common/variables";

export const SignInFormWidget = (props) => {
  const authenticationService = new AuthService();
  const notificationService = new NotificationService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordType, setShowPasswordType] = useState("password");

  function handleShowPassword() {
    if (showPassword === false) {
      setShowPassword(true);
      setShowPasswordType("text");
    } else {
      setShowPassword(false);
      setShowPasswordType("password");
    }
  }

  function handleSubmit() {
    let containError = false;
    
    [(email, password)].forEach((item, i) => {
      if (item.trim() === "") {
        containError = true;
      } else {
        authenticationService.signIn(email, password);
      }
    });

    if (containError) {
      notificationService.consume(
        NOTIFICATION_MSG_TYPE.ERROR,
        "Um dos campos está vazio"
      );
    }
  }

  return (
    <Form className="sign-in-form">
      <div className="logo mb-4">
        <img src={logoDibba} alt="Logo Dibba" />
      </div>
      <Form.Text className="title">Seja bem-vindo!</Form.Text>
      <Form.Text className="mb-5 subtitle">
        Faça seu login para continuar.
      </Form.Text>
      <Form.Control
        className="form-input mb-3"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="eye-password">
        <i
          className="fi fi-rs-eye"
          onClick={() => {
            handleShowPassword();
          }}
        ></i>
      </div>
      <Form.Control
        type={showPasswordType}
        className="form-input mb-3"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Form.Text className="recover-password mb-3">
        <a href="/recover-password">Esqueceu a senha?</a>
      </Form.Text>

      <Button
        className="mb-2 login"
        onClick={() => {
          handleSubmit();
        }}
      >
        Entrar
      </Button>
      <div>
        <div>
          <hr />
        </div>
        <Form.Text className="option">ou</Form.Text>
        <div>
          <hr />
        </div>
      </div>
      <Button
        className="mt-2 with-google"
        onClick={() => {
          alert("Desculpe. Essa funcionalidade está em andamento.");
        }}
      >
        Entrar com Google
      </Button>
    </Form>
  );
};
