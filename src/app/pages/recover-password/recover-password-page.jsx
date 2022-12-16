import React from "react";
import { RecoverPasswordWidget } from "../../widgets/recover-password-form/recover-password-form-widget"
import './recover-password-page.scss'

export default class RecoverPasswordPage extends React.Component {

  render() {
    return (
      <div className="recover-password-page">
        <RecoverPasswordWidget />
      </div>
    )
  }
}