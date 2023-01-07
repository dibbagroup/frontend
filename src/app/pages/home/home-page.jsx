import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { HeaderWidget } from "../../widgets/header/header-widget";
import { FooterWidget } from "../../widgets/footer/footer-widget";
import { BasicSectionWidget } from "../../widgets/basic-section/basic-section-widget";
import "./home-page.scss";

import mobileMockup from "../../../assets/images/mobileMockup.png"
import qrCode from "../../../assets/images/download-qrcode.png"
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
                <p className="text-light fw-200">Desculpe, ainda não temos nenhum evento cadastrado</p>
                {this.state.events.map((ev, i) => (
                  <Col key={i}>
                    {ev.name === "Welcome Dibba" && (
                      <EventCardWidget event={ev} />
                    )
                    }
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>

        <section className="home-download-section py-5 w-75 mx-auto">
          <div className="content" style={{ height: 500 }}>
            <div className="w-50">
              <h3 className="pt-3 text-light">
                📱 Aproveite as melhores festas na palma da sua mão
              </h3>

              <small className="fw-lighter text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nihil dolorum molestiae dignissimos sint sed! Culpa ea architecto recusandae, necessitatibus, doloremque veritatis libero, dicta accusamus suscipit corrupti eum doloribus dignissimos?
              </small>
            </div>

            <div className="download-buttons">
              <Image
                src={qrCode}
                height={200}
              />
            </div>
          </div>

          <Image
            src={mobileMockup}
            height={500}
            className="mobileMockup"
          />
        </section>

        <FooterWidget />
      </div>
    );
  }
}
