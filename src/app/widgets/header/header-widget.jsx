import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./header-widget.scss";
import logoDibba from "../../../assets/images/logo_dibba.png";

export const HeaderWidget = (props) => {
  const paths = [
    {
      href: "/",
      text: "Menu",
    },
    {
      href: "/about",
      text: "Sobre nós",
    },
    {
      href: "/events",
      text: "Eventos",
    },
    {
      href: "/profile",
      text: "Perfil",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <Image src={logoDibba} width={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {paths.map((path, i) => (
              <Nav.Link
                href={path.href}
                key={i}
                active={window.location.pathname === path.href}
              >
                {path.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
