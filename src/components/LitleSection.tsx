import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LitleSection = () => (
  <div className="litle-section">
    <Container>
      <Row>
        <Col xs={12}>
          <div className="title">Ready to regain the control of your data?</div>
        </Col>
        <Col className="text-center py-4" xs={12}>
          <button type="button" className="btn size-sm btn-main">
            Start Now
          </button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default LitleSection;
