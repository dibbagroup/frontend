import React from "react";
import { SignUpFormWidget } from "../../widgets/sign-up-form/sign-up-form-widget"; 
import './sign-up-page.scss'

export default class SignUpPage extends React.Component {

  render() {
    return (
      <div className="m-auto sign-in-page">
        <SignUpFormWidget />
      </div>
    )
  }
}