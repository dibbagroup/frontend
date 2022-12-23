import React from "react";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { ProfileFormWidget } from "../../widgets/profile-form/profile-form-widget";
import "./profile-page.scss";
import { USER_INFOS } from "../../../common/variables";
import { Button } from 'react-bootstrap'
import AuthService from "../../../services/auth-service";

export default class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: JSON.parse(sessionStorage.getItem(process.env.REACT_APP_SESSION_STORAGE_USER_KEY))
    };
  }

  render() {
    return (
      <div className="bg-dark profile-page text-light text-center">
        <HeaderWidget />
        {!this.state.user ? <CaseErrorWidget /> : <CaseSuccessWidget user={this.state.user} />}
      </div>
    );
  }
}

const CaseSuccessWidget = ({ user }) => {
  const authService = new AuthService()

  const handleSignOut = () => {
    authService.signOut()
  }

  return (
    <div className="case-success-widget mt-5">
      <div className="logout-area">
        <Button className="logout" variant="danger" onClick={() => { handleSignOut() }}>Sair</Button>
      </div>
      <h4 className="fw-light">Olá</h4>
      <h1 className="m-2">{user.firstName} {user.lastName}</h1>
      <small className="text-muted">#{user.id}</small>
      <ProfileFormWidget user={user} />
    </div>
  );
};

const CaseErrorWidget = (props) => {
  return (
    <div className="case-error-widget">
      <h4>
        Ops... <br /> parece que você não entrou em nenhuma conta ainda
      </h4>
      <p>
        Gostaria de
        <a href="/sign-in" className="text-light">
          entrar
        </a>
        ou
        <a href="/sign-up" className="text-light">
          criar sua conta
        </a>
        ?
      </p>
    </div>
  );
};
