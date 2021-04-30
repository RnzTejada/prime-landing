import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
            <button type="button" className="btn btn-main">
              <img src={Discord} alt="" /> Join us
            </button>
          </Col>
        </Row>
      </Container>
    </Flip>
  </div>
);

export default LitleSection;
