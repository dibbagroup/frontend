import { Button, Carousel } from "react-bootstrap";

export const HomeSliderWidget = (props) => {
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
                window.location.href = `/events/${party.id}`;
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
