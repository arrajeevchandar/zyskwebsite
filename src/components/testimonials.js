import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Testimonials() {
  return (
    <Container className="text-center my-5">
      <h2>What our customers say</h2>
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <blockquote className="blockquote">
            <p>"We've been using this platform to kickstart every new project."</p>
            <footer className="blockquote-footer">John Doe</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
