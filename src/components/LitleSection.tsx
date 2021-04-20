import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LitleSection = () => (
  <div className="litle-section">
    <Container>
      <Row>
        <Col sm={12}>
          <div className="title">Ready to regain the control of your data?</div>
        </Col>
        <Col className="text-center py-4" sm={12}>
          <button type="button" className="btn btn-main">
            Start Now
          </button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default LitleSection;
