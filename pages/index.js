import Head from 'next/head'
import { Container, Nav, Image, ListGroup, Card, Button, Dropdown, Navbar, Col, Media, Row } from 'react-bootstrap';
import css from "./main.global.scss"
import Layout from "../components/layout";
import CategoriesController from "../controller/categories";
import PostsController from "../controller/posts";
import { useState, useEffect } from 'react';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

function FeaturedPostRender(props) {
  const featuredPost = props.featuredPost;
  if (featuredPost.length) {
    return (
      <Row className="justify-content-md-center">
        <Col className="align-me" sm={12} md={7} lg={6}>
          <Image id="featuredImage" src={`http://dcoders.rs:1337${featuredPost[0].thumbnail.url}`} thumbnail />
        </Col>
        <Col sm={12} md={5} lg={6}>
          <h3>{featuredPost[0].name}</h3>
          <p>{featuredPost[0].content}</p>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row className="justify-content-md-center">
        <Col className="align-me" sm={12} md={7} lg={6}>
          <Image id="featuredImage" src="https://barrie360.com/wp-content/uploads/2019/02/missing-1-1.jpg" thumbnail />
        </Col>
        <Col sm={12} md={5} lg={6}>
          <h3>There is not featured post in this category.</h3>
          <p>Please come back later.</p>
        </Col>
      </Row>
    )
  }
}

function latestPostsRender(props) {
  const chunks = chunk(props.latestPosts, 5);
  for (const oneChunk of chunks) {

  }
}

export default function Home({ query, Categories, FeaturedPost, TopFive, LatestPosts }) {
  const [latestPosts, setLatestPosts] = useState(LatestPosts);
  const [page, setPage] = useState(1);
  (latestPosts.length);
  const loadMorePosts = async () => {
    const newPage = page+1;
    setPage(newPage);
    const morePosts = await PostsController.latestPosts(query.category, query.sort, newPage);
    await setLatestPosts([...latestPosts, ...morePosts]);
    latestPostsRender();
  }
  const firstCol = [];
  const secondCol = [];
  const latestPostsRender = () => {
    let left = true;
    for (const post of latestPosts) {
      if (left) {
        firstCol.push(post);
        left = false;
      } else {
        secondCol.push(post);
        left = true;
      }
    }
  }
  latestPostsRender();

  const SortDropdown = () => {
    if (query.category) {
      if (query.sort && query.sort == "top") {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Top News
                  <Dropdown.Menu>
                <Dropdown.Item href={`/?category=${query.category}&&sort=top`}>Top News</Dropdown.Item>
                <Dropdown.Item href={`/?category=${query.category}`}>Latest News</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>

        )
      } else {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Latest News
                <Dropdown.Menu>
                <Dropdown.Item href={`/?category=${query.category}`}>Latest News</Dropdown.Item>
                <Dropdown.Item href={`/?category=${query.category}&&sort=top`}>Top News</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        )
      }
    } else {
      if (query.sort && query.sort == "top") {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Top News
            <Dropdown.Menu>
                <Dropdown.Item href={`/?sort=top`}>Top News</Dropdown.Item>
                <Dropdown.Item href={`/`}>Latest News</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>

        )
      } else {
        return (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Latest News
            <Dropdown.Menu>
                <Dropdown.Item href={`/`}>Latest News</Dropdown.Item>
                <Dropdown.Item href={`/?sort=top`}>Top News</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        )
      }
    }
  }

  return (
    <div>
      <Layout>
        <Container id="secondNavbarContainer" fluid bg="success">
          <Container>
            <Navbar bg="success" variant="dark" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
                <Nav id="secondNavbar">
                  <Nav.Link href="/">All</Nav.Link>
                  {Categories.map((e, index) => (
                    <Nav.Link href={`/?category=${e.slug}`}>{e.name}</Nav.Link>
                  ))}
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
                <FeaturedPostRender featuredPost={FeaturedPost} />
              </Container>
            </Col>
            <Col lg={12} xl={4}>
              <Container>
                <Row className="justify-content-md-center">
                  <Col id="topNewsCol" className="justify-content-md-center">
                    <h3 id="topNewsTitle">Top News</h3>

                    <ListGroup variant="flush" className="listGroupNews">
                      {TopFive.map((e, index) => (
                        <ListGroup.Item action><a href={`/post?slug=${e.slug}`}>{`${e.name}`}</a></ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="sectorRow">
            <Col id="dropdownCol">
              <SortDropdown />
            </Col>
          </Row>
          <Row className="justify-content-sm-center sectorRow">
            <Col md={12} lg={6}>
              <Container>
                <ListGroup className="listGroupNews">
                  {firstCol.map((e, index) => (
                    <ListGroup.Item action><a href={`/post?slug=${e.slug}`}>{e.name}</a></ListGroup.Item>
                  ))}
                </ListGroup>
              </Container>
            </Col>
            <Col md={12} lg={6}>
              <Container>
                <ListGroup className="listGroupNews">
                  {secondCol.map((e, index) => (
                    <ListGroup.Item action><a href={`/post?slug=${e.slug}`}>{e.name}</a></ListGroup.Item>
                  ))}
                </ListGroup>
              </Container>
            </Col>
          </Row>
          <Row className="sectorRow">
            <Col id="dropdownCol">
              <Button onClick={loadMorePosts} variant="success">Show More</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

Home.getInitialProps = async ({ query }) => {
  const Categories = await CategoriesController.getCategories();
  const FeaturedPost = await PostsController.getFeaturedPost(query.category);
  const TopFive = await PostsController.getTopFive(query.category);
  const LatestPosts = await PostsController.latestPosts(query.category, query.sort, 1);
  return { query, Categories, FeaturedPost, TopFive, LatestPosts }
}
