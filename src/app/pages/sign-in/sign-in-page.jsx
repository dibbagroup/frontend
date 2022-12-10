import React from "react";
import { SignInFormWidget } from "../../widgets/sign-in-form/sign-in-form-widget"
import './sign-in-page.scss'

export default class SignInPage extends React.Component {

  render() {
    return (
      <div className="m-auto sign-in-page">
        <div className="image-background"></div>
        <SignInFormWidget/>
      </div>
    )
  }
}
