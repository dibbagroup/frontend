import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AuthService from "../../../services/auth-service";
import NotificationService from "../../../services/notification-service";
import EventService from "../../../services/event-service";
import "../../../common/variables";
import { NOTIFICATION_MSG_TYPE } from "../../../common/variables";
import { IntegrationTestTableWidget } from "../../widgets/integration-test-table/integration-test-table-widget";

export default class IntegrationPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Integration test",
      tableValues: [],
    };
  }

  handleSignUp() {
    let auth = new AuthService();
    auth.signUp({
      firstName: "teste",
      lastName: "003",
      userName: "teste_003",
      phone: "00000000011",
      email: "dev.teste_003@gmail.com",
      password: "12345678",
      role: "CUSTOMER",
      docNumber: "012345",
    });
  }

  handleSignIn() {
    let auth = new AuthService();
    auth.signIn("mribas", "M@noel123");
  }

  handleNotification() {
    let not = new NotificationService(
      "show de bola",
      NOTIFICATION_MSG_TYPE.SUCCESS
    );
    not.showMessage();
  }

  async handleAllEvents() {
    let eventService = new EventService();
    let res = await eventService.all();
    this.setState({ tableValues: res });
    return;
  }

  handleCopyLink() {
    let eventService = new EventService()
    eventService.share()
  }

  render() {
    return (
      <>
        <div>
          <h1>{this.state.title}</h1>
          <Button
            onClick={() => {
              this.handleCopyLink();
            }}
          >
            Copiar link
          </Button>
          <Button
            onClick={() => {
              this.handleSignIn();
            }}
          >
            Autenticar
          </Button>
          <Button
            onClick={() => {
              this.handleSignUp();
            }}
          >
            Cadastrar
          </Button>

          <Button
            onClick={() => {
              this.handleAllEvents();
            }}
          >
            Ver todos eventos
          </Button>
        </div>

        <IntegrationTestTableWidget data={this.state.tableValues} />
      </>
    );
  }
}
