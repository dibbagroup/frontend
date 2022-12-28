import React from "react";
import { Row, Col } from "react-bootstrap";
import { HeaderWidget } from "../../widgets/header/header-widget";
import { FooterWidget } from "../../widgets/footer/footer-widget";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";
import "./home-page.scss";

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
      sliderItems: [
        {
          id: "abc-2",
          title: "Welcome to DIBBA",
          image: image02,
        },
        {
          id: "abc-3",
          title: "Welcome to DIBBA",
          image: image03,
        },
        {
          id: "abc-4",
          title: "Welcome to DIBBA",
          image: image04,
        },
      ],

      events: [],
    };
  }

  componentDidMount() {
    const eventsService = new EventService();
    let events = eventsService.getAll();
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

        <div className="home-content w-75 mx-auto my-4 pt-4">
          <div className="most-viewed mt-5">
            <BasicSectionWidget title={"🔥 Em alta"} />
            <div className="card-list d-grid">
              <Row md={3}>
                {this.state.events.map((ev, i) => (
                  <Col key={i}>
                    { ev.name === "Welcome Dibba" && (
                      <EventCardWidget event={ev} />
                      )
                    }
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          <div className="events-bought mt-5">
            <BasicSectionWidget title={"🎉 Eventos comprados"} />
            <p className="text-light text-muted fw-lighter ">
              Você não tem nenhum evento comprado até o momento...
            </p>
          </div>
        </div>

        <FooterWidget />
      </div>
    );
  }
}
