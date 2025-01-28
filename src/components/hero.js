import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h1>Beautiful analytics to grow smarter</h1>
          <p>Powerful, self-serve product analytics to help you convert, engage, and retain more users.</p>
          <Button variant="primary" className="me-3">Start Free Trial</Button>
          <Button variant="outline-secondary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
