import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./events-page.scss";

import { HeaderWidget } from "../../widgets/header/header-widget";
import EventService from "../../../services/event-service";

export default class EventsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchbarValue: "",
      events: [],
    };
  }

  async fetchEventsWithSearchbarValue() {
    let service = new EventService();

    await service.getByName(this.state.searchbarValue).then((res) => {
      this.setState({ ...this.state, events: res });
    });
  }

  componentDidMount() {
    let service = new EventService();
    let res = service.getAll();
    res.then((data) => {
      this.setState({ ...this.state, events: data });
    });

    return;
  }

  render() {
    return (
      <div className="events-page bg-dark">
        <HeaderWidget />

        <h1 className="text-light my-4 text-center">Eventos</h1>

        <div className="content w-75 mx-auto mt-5">
          <div className="w-50 mx-auto mb-5">
            <InputGroup className="mb-2 search bar-events">
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
                onKeyDown={(e) => {
                  if (e.code.toUpperCase() === "ENTER") {
                    this.fetchEventsWithSearchbarValue();
                  }
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

          {this.state.events.map((row, i) => (
            <h1>{row.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}
