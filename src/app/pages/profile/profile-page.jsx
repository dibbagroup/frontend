import React from "react";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { ProfileFormWidget } from "../../widgets/profile-form/profile-form-widget"
import './profile-page.scss'

export default class ProfilePage extends React.Component {

  render() {
    return (
      <div className="profile-page text-light text-center">
        <HeaderWidget />
        <h2 className="mt-5 fw-light">Olá</h2>
        <h1 className="m-2">Carlos Amaral</h1>
        <ProfileFormWidget />
      </div>
    )
  }
}