import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Supply from '../components/Supply';

const Token: React.FC = () => (
  <section className="section mb-4">
    <Container>
      <Row>
        <Col xs={12}>
          <Supply className="text" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Token;
