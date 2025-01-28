import React from "react";
import { Accordion, Container } from "react-bootstrap";

function FAQ() {
  return (
    <Container className="my-5">
      <h2>Frequently Asked Questions</h2>
      <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Is there a free trial?</Accordion.Header>
          <Accordion.Body>Yes, we offer a 14-day free trial.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I change my subscription plan?</Accordion.Header>
          <Accordion.Body>You can change or cancel your plan anytime.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FAQ;
