import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Paper from '../components/Paper';

export default function Lightpaper() {
  return (
    <section className="section mb-4">
      <Container>
        <Row>
          <Col xs={12}>
            <Paper className="text" />
          </Col>
          <Col className="center d-flex justify-content-center" xs={12}>
            <Button variant="" className="btn-main">
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
