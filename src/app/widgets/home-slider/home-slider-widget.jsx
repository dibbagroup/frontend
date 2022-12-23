import { Button, Carousel } from "react-bootstrap";
import "./home-slider-widget.scss"
import NotificationService from "../../../services/notification-service";
import { NOTIFICATION_MSG_TYPE } from "../../../common/variables";

export const HomeSliderWidget = (props) => {

  const notificationService = new NotificationService();

  return (
    <Carousel className="slider">
      {props.data.map((party, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100 slider-image"
            src={party.image}
            height={600}
            alt={party.title}
          />
          <Carousel.Caption>
            <h3>{party.title}</h3>
            <Button
              className="mb-5 mt-2 slider-btn-details"
              variant="outline-light"
              onClick={() => {
                notificationService.add(NOTIFICATION_MSG_TYPE.ERROR, "Essa funcionalidade ainda não está disponível")
                /* window.location.href = `/events/${party.id}`; */
              }}
            >
              Detalhes
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
