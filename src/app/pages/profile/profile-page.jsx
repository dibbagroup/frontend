import React from "react";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { ProfileFormWidget } from "../../widgets/profile-form/profile-form-widget";
import "./profile-page.scss";
import { USER_INFOS } from "../../../common/variables";

export default class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: USER_INFOS,
    };
  }

  render() {
    return (
      <div className="bg-dark profile-page text-light text-center">
        <HeaderWidget />
        {!this.state.user ? <CaseErrorWidget /> : <CaseSuccessWidget />}
      </div>
    );
  }
}

const CaseSuccessWidget = (props) => {
  return (
    <div>
      <h2 className="mt-5 fw-light">Olá</h2>
      <h1 className="m-2">Carlos Amaral</h1>
      <ProfileFormWidget />
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
