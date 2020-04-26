import Head from "next/head";
import Layout from "../components/layout";
import css from "./main.global.scss"
import { Container, Nav, Image, ListGroup, Card, Button, Dropdown, Navbar, Col, Media, Row } from 'react-bootstrap';


export default function Post() {
  return (
    <Layout>
      <Container id="secondNavbarContainer" fluid bg="success">
        <Container>
          <Navbar bg="success" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
              <Nav id="secondNavbar">
                <Nav.Link href="/">Go Back</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
      <Container fluid>
        <iframe id="iframePost" src="https://news.sky.com/story/coronavirus-how-the-pandemic-is-ruining-the-european-economy-11978579"></iframe>
      </Container>
    </Layout>
  )
}