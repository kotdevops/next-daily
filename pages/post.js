import Head from "next/head";
import Layout from "../components/layout";
import css from "./main.global.scss"
import PostsController from "../controller/posts";
import { Container, Nav, Image, ListGroup, Card, Button, Dropdown, Navbar, Col, Media, Row } from 'react-bootstrap';


export default function Post({query, Post}) {
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
        <iframe id="iframePost" src={Post.url}></iframe>
      </Container>
    </Layout>
  )
}

Post.getInitialProps = async ({ query }) => {
    const Post = await PostsController.getSinglePost(query.slug)
    return { query, Post }
}