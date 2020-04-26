import Head from 'next/head'
import { Container, Nav, Image, ListGroup, Card, Button, Dropdown, Navbar, Col, Media, Row } from 'react-bootstrap';
import css from "./main.global.scss"
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Container id="secondNavbarContainer" fluid bg="success">
          <Container>
            <Navbar bg="success" variant="dark" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
                <Nav id="secondNavbar">
                  <Nav.Link href="#link">All</Nav.Link>
                  <Nav.Link href="#link">Medicine</Nav.Link>
                  <Nav.Link href="#link">Legal Issues</Nav.Link>
                  <Nav.Link href="#link">Hot Products</Nav.Link>
                  <Nav.Link href="#link">Customers</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </Container>
        <br />
        <Container fluid id="allContent">
          <Row className="justify-content-sm-center sector-row" id="featuredPost">
            <Col lg={12} xl={8} >
              <Container>
                <Row className="justify-content-md-center">
                  <Col className="align-me" sm={12} md={7} lg={6}>
                    <Image id="featuredImage" src="https://cdn.cnn.com/cnnnext/dam/assets/200422053949-supreme-court-the-hague-netherlands-0421-exlarge-169.jpg" thumbnail />
                  </Col>
                  <Col sm={12} md={5} lg={6}>
                    <h3>New autopsy results show two Californians died of coronavirus weeks before previously known first US death</h3>
                    <p>These deaths now stand as the country's earliest two attributed to the novel coronavirus, a development that appears to shift the understanding of how early the virus was spreading in the country, health experts told CNN Wednesday.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={12} xl={4}>
              <Container>
                <Row className="justify-content-md-center">
                  <Col id="topNewsCol" className="justify-content-md-center">
                    <h3 id="topNewsTitle">Top News</h3>

                    <ListGroup variant="flush" className="listGroupNews">
                      <ListGroup.Item action><a href="/post">UN warns of global famines of 'biblical proportions'</a></ListGroup.Item>
                      <ListGroup.Item action><a href="/post">Shocking footage shows young men looting truck for food</a></ListGroup.Item>
                      <ListGroup.Item action><a href="/post">As Poland defies 'European values,' women resist on streets</a></ListGroup.Item>
                      <ListGroup.Item action><a href="/post">Missouri is suing China over coronavirus impact</a></ListGroup.Item>
                      <ListGroup.Item action><a href="/post">68-year-old woman gives birth to twins after four IVF attempts</a></ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="sectorRow">
            <Col id="dropdownCol">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Latest News
              </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Latest News</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Top News</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="justify-content-sm-center sectorRow">
            <Col md={12} lg={6}>
              <Container>
                <ListGroup className="listGroupNews">
                  <ListGroup.Item action><a href="/post">UN warns of global famines of 'biblical proportions'</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">Shocking footage shows young men looting truck for food</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">As Poland defies 'European values,' women resist on streets</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">Missouri is suing China over coronavirus impact</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">68-year-old woman gives birth to twins after four IVF attempts</a></ListGroup.Item>
                </ListGroup>
              </Container>
            </Col>
            <Col md={12} lg={6}>
              <Container>
                <ListGroup className="listGroupNews">
                  <ListGroup.Item action><a href="/post">UN warns of global famines of 'biblical proportions'</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">Shocking footage shows young men looting truck for food</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">As Poland defies 'European values,' women resist on streets</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">Missouri is suing China over coronavirus impact</a></ListGroup.Item>
                  <ListGroup.Item action><a href="/post">68-year-old woman gives birth to twins after four IVF attempts</a></ListGroup.Item>
                </ListGroup>
              </Container>
            </Col>
          </Row>
          <Row className="sectorRow">
            <Col id="dropdownCol">
              <Button variant="success">Show More</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}
