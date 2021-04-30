import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Discord from '../assets/img/discord.svg';

const Flip = require('react-reveal/Flip');

const LitleSection = () => (
  <div className="litle-section">
    <Flip bottom>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="title">
              Ready to regain the control of your data?
            </div>
          </Col>
          <Col className="text-center py-4" sm={12}>
            <Button variant="" className="btn-main">
              <img src={Discord} alt="" /> Join us
            </Button>
          </Col>
        </Row>
      </Container>
    </Flip>
  </div>
);

export default LitleSection;
