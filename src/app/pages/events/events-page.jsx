import React from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { FooterWidget } from "../../widgets/footer/footer-widget";
import "./events-page.scss";

import { HeaderWidget } from "../../widgets/header/header-widget";
import EventService from "../../../services/event-service";

export default class EventsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchbarValue: "",
      events: [],
      eventsFiltered: [],
      isLoading: true,
    };
  }

  async fetchEventsWithSearchbarValue() {
    this.setState({ ...this.state, isLoading: true });

    if (this.state.searchbarValue.trim() === "") {
      this.setState({
        ...this.state,
        isLoading: false,
        eventsFiltered: this.state.events,
      });
      return;
    }

    let resByName = [];
    this.state.events.forEach((e, _) => {
      if (
        e.name.toUpperCase().includes(this.state.searchbarValue.toUpperCase())
      ) {
        resByName.push(e);
      }
    });

    this.setState({ ...this.state, eventsFiltered: resByName });
  }

  componentDidMount() {
    let service = new EventService();
    let res = service.getAll();
    res.then((data) => {
      this.setState({
        ...this.state,
        events: data,
        eventsFiltered: data,
        isLoading: false,
      });
    });

    return;
  }

  render() {
    return (
      <div className="events-page bg-dark pb-3">
        <HeaderWidget />

        <h1 className="text-light my-4 text-center">Eventos</h1>

        <div className="content w-75 mx-auto mt-5">
          <div className="w-50 mx-auto mb-5">
            <InputGroup className="mb-2 search searchbar-events">
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

          {this.state.isLoading ? (
            <div className="text-light text-center">
              <p>Carregando eventos...</p>
            </div>
          ) : null}

          {!this.state.isLoading &&
            this.state.eventsFiltered.map((row, i) => (
              <div>
                {row.name === "Welcome Dibba" && (
                  <Card className="bg-dark border border-secondary my-2 text-light">

                    <Card.Body>
                      <h4>{row.name}</h4>
                      <small className="text-secondary">{row.description}</small>

                      <div
                        className="d-flex justify-content-end"
                        style={{ gap: "16px" }}
                      >
                        <Button variant="outline-light">Ver detalhes</Button>
                        <Button variant="light">Comprar</Button>
                      </div>
                    </Card.Body>
                  </Card>
                )
                }
              </div>
            ))}
        </div>

        <FooterWidget />
      </div>
    );
  }
}
