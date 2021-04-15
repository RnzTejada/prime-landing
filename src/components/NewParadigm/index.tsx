import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const ParadigmSection = () => (
  <section className="section-paradigm">
    <Container>
      <Row>
        <Col xs={12}>
          <div className="section-title justify-content-end py-4">
            <h2 className="paradigm">A NEW PARADIGM</h2>
            <span>solution</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>.</Col>
        <Col lg={4}>.</Col>
        <Col lg={4}>.</Col>
      </Row>
    </Container>
  </section>
);

export default ParadigmSection;
