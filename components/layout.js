import { Container, Nav, Image, ListGroup, Card, Button, Dropdown, Navbar, Col, Media, Row } from 'react-bootstrap';
import css from "../pages/main.global.scss"

export default function Layout({ children }) {
    return <div>
        <Container>
            <Navbar className="justify-content-sm-center" bg="white" variant="light">
                <Navbar.Brand href="#home"><img id="logo" src="/logo.png" alt="Logo" /></Navbar.Brand>
            </Navbar>
        </Container>
        {children}
        <Container fluid id="footer">
        <Row>
          <Col>
            <h1>This is footer</h1>
          </Col>
        </Row>
      </Container>
    </div>
}