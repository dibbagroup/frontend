import "./event-card-widget.scss";
import image01 from "../../../assets/images/party/01.jpg";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EventCardWidget = (props) => {
  const event = props.event;
  let startDate = new Date(event.startDateTime);
  let endDate = new Date(event.endDateTime);

  const infos = [
    {
      title: "Local",
      content: event.city,
    },
    {
      title: "Data",
      content: `${startDate.getDay()}/${startDate.getUTCMonth()}/${startDate.getUTCFullYear()}`,
    },
    {
      title: "Horário",
      content: `${startDate.getUTCHours()}:${startDate.getUTCMinutes()} - ${endDate.getUTCHours()}:${endDate.getUTCMinutes()}`,
    },
    {
      title: "Idade mínima",
      content: `${event.ageClassification} anos`,
    },
  ];

  return (
    <div className="event-card-widget bg-darker rounded">
      <div className="head">
        <Image src={image01} />
        <h5>{event.name}</h5>
        <div className="infos text-light">
          <div className="list">
            <Row md={2}>
              {infos.map((info, i) => (
                <Col>
                  <div className="info-row">
                    <small>{info.title}</small>
                    <p>{info.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <Link
        className="w-100 text-center my-3 text-light fw-light"
        to={`/events/${event.id}`}
      >
        Detalhes
      </Link>
    </div>
  );
};
