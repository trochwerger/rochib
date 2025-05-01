import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import SimpleAccordion from "@/components/SimpleAccordian";
import { Container } from "react-bootstrap";
import { Box } from "@chakra-ui/react";

export default function Services() {
  return (
    <>
      <Box>
        <Row>
          <Col md={6}>
            <h4>Our Services</h4>
            <p>
              With a dynamic and flexible approach, we discuss with our clients
              their needs, find the best technologies that fit their
              requirements and culture, and design a strategy to implement their
              goals.
            </p>
            <SimpleAccordion />
          </Col>
          <Col md={6}>
            <Image src="/homeBackground1.jpg" alt="Aesthetic" fluid />
          </Col>
        </Row>
      </Box>
    </>
  );
}
