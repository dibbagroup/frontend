import React from "react";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { ProfileFormWidget } from "../../widgets/profile-form/profile-form-widget"
import './profile-page.scss'
import { USER_INFOS } from "../../../common/variables";

export default class ProfilePage extends React.Component {
  constructor() {
    super()
    this.state = {
      user: USER_INFOS
    }
  }

  render() {
    return (
      <div className="bg-dark profile-page text-light text-center">
        {/* {user === null &&
          <div>
            <HeaderWidget />
            <h2 className="mt-5 fw-light">Olá</h2>
            <h1 className="m-2">Carlos Amaral</h1>
            <ProfileFormWidget />
          </div>
        } */}

        <HeaderWidget />
        {
          !this.state.user ?
            <CaseErrorWidget />
            : <CaseSuccessWidget />
        }
      </div>
    )
  }
}

const CaseSuccessWidget = props => {
  return (
    <div>
      <h2 className="mt-5 fw-light">Olá</h2>
      <h1 className="m-2">Carlos Amaral</h1>
      <ProfileFormWidget />
    </div>
  )
}

const CaseErrorWidget = props => {
  return (
    <div className="case-error-widget">
      <div>
        <h4 className="fw-lighter">Parece que você não entrou em nenhuma conta ainda</h4>
        <p>
          <a href="/sign-in">Gostaria de entrar?</a>
          ou
          <a href="/sign-in">Criar sua conta</a>
        </p>
      </div>
    </div>
  )
}