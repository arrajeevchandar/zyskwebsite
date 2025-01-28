import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Features() {
  const features = [
    { title: "Stay in the loop", description: "Analytics that keeps you informed." },
    { title: "Deliver better results", description: "Transform your data into insights." },
    { title: "Manage your web reports", description: "Automate your reporting workflows." },
  ];

  return (
    <Container className="text-center my-5">
      <h2>Analytics that feels like it's from the future</h2>
      <Row className="mt-4">
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-4">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Features;
