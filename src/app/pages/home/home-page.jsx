import React from "react";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";
import { Row, Col } from "react-bootstrap";
import "./home-page.scss";

import image01 from "../../../assets/images/party/01.jpg";
import image02 from "../../../assets/images/party/02.jpg";
import image03 from "../../../assets/images/party/03.jpg";
import image04 from "../../../assets/images/party/04.jpg";

import EventService from "../../../services/event-service";
import { EventCardWidget } from "../../widgets/event-card/event-card-widget";
import { HomeSliderWidget } from "../../widgets/home-slider/home-slider-widget";

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "WELCOME TO DIBBA",
      sliderItems: [
        {
          id: "abc-1",
          title: "Ano novo no P12",
          image: image01,
        },
        {
          id: "abc-2",
          title: "Ano novo no P12",
          image: image02,
        },
        {
          id: "abc-3",
          title: "Ano novo no P12",
          image: image03,
        },
        {
          id: "abc-4",
          title: "Ano novo no P12",
          image: image04,
        },
      ],

      events: [],
    };
  }

  componentDidMount() {
    const eventsService = new EventService();
    var events = eventsService.getAll();
    var state_events = this.state.events;

    console.log(events)
    console.log(state_events)

    events.then((res) => {
      this.setState({
        ...this.state,
        events: res,
      });
    });
  }

  render() {
    return (
      <div className="home-page bg-dark pb-5">
        <HeaderWidget />
        <HomeSliderWidget data={this.state.sliderItems} />

        <div className="home-content w-50 mx-auto my-4 pt-4">
          <div className="most-viewed mt-5">
            <BasicSectionWidget title={"🔥 Em alta"} />
            <div className="card-list d-grid">
              <Row md={2}>
                {this.state.events.map((ev, i) => (
                  <Col key={i}>
                    <EventCardWidget event={ev} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          <div className="events-bought mt-5">
            <BasicSectionWidget title={"🎉 Eventos comprados"} />
            <p className="text-muted fw-lighter">
              Você não tem nenhum evento comprado até o momento...
            </p>
          </div>
        </div>
      </div>
    );
  }
}
