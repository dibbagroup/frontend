import React from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import "./events-page.scss";

import { HeaderWidget } from "../../widgets/header/header-widget";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";
import EventService from "../../../services/event-service";

// TODO: Implementar a funcionalidade do componentDidMount para adicionar os eventos na tela
//       problema atual é o setState que nao está conseguindo setar
export default class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarValue: "",
      events: null,
    };
  }

  fetchEventsWithSearchbarValue() {
    // Code...
    console.log(this.state.searchbarValue);
  }

  render() {
    return (
      <div className="events-page bg-dark">
        <HeaderWidget />

        <h1 className="text-light my-4 text-center">Eventos</h1>

        <div className="content w-75 mx-auto mt-5">
          <div className="w-50 mx-auto mb-5">
            <InputGroup className="mb-2 searchbar-events">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Pesquisar..."
                value={this.state.searchbarValue}
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    searchbarValue: e.target.value,
                  });
                }}
              />
              <InputGroup.Text
                onClick={() => {
                  this.fetchEventsWithSearchbarValue();
                }}
              >
                <i className="fas fa-search" />
              </InputGroup.Text>
            </InputGroup>
          </div>

          {this.state.events ? (
            <div>
              {this.state.events.map((ev, i) => {
                <Card>
                  <Card.Body>ABC</Card.Body>
                </Card>;
              })}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
