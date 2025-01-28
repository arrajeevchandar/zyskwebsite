import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Blog() {
  const blogPosts = [
    { title: "UX Design", description: "Best practices in 2024.", img: "path/to/img1.jpg" },
    { title: "Migrating to Microservices", description: "What you need to know.", img: "path/to/img2.jpg" },
    { title: "Building your API Stack", description: "Efficiently scale APIs.", img: "path/to/img3.jpg" },
  ];

  return (
    <Container className="my-5">
      <h2>Latest Blog Posts</h2>
      <Row className="mt-4">
        {blogPosts.map((post, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={post.img} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
