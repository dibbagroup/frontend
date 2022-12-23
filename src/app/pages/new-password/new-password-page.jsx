import React from "react";
import { NewPasswordWidget } from "../../widgets/new-password-form/new-password-form-widget"
import './new-password-page.scss'

export default class NewPasswordPage extends React.Component {

  render() {
    return (
      <div className="new-password-page">
        <NewPasswordWidget />
      </div>
    )
  }
}