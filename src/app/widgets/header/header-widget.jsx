import { Container, Nav, Navbar } from 'react-bootstrap';
import './header-widget.scss'
import logoDibba from '../../../assets/images/logo_dibba.png'

export const HeaderWidget = props => {
    return (
        <main className='header-widget'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={logoDibba} alt="Logo Dibba"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Sobre nós</Nav.Link>
                            <Nav.Link href="#">Eventos</Nav.Link>
                            <Nav.Link href="#">Perfil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </main>
    )
}