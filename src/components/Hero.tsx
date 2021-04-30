import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Logo from '../assets/img/logo-3.svg';
import Telegram from '../assets/img/telegram.svg';

const Hero = () => (
  <Container fluid className="hero">
    <Row className="w-100">
      <Col className="text" sm={12} lg={6}>
        <div>
          <img src={Logo} alt="logo" />
          <h3 className="py-3 title">
            It's time for you to regain control of your data
          </h3>
          <Button variant="" size="lg" className="btn-main">
            <img src={Telegram} alt="" /> Enter the community
          </Button>
          <Row className="timeline-mobile">
            <Col className="item" sm={6} md={6}>
              <h4>10+ millon</h4>
              <span>Stolen accounts</span>
            </Col>
            <Col className="item" sm={6} md={6}>
              <h4>570+ millon</h4>
              <span>Stolen passwords</span>
            </Col>
            <Col className="item" sm={6} md={6}>
              <h4>$200 billon</h4>
              <span>In revenue by reselling identity data each year</span>
            </Col>
            <Col className="item" sm={6} md={6}>
              <h4>1</h4>
              <span>Only one for you</span>
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="timeline-area" lg={6} sm={12}>
        <div className="float-lg-right">
          <div className="item text-right">
            <h4>10+ millon</h4>
            <span>Stolen accounts</span>
          </div>
          <div className="item text-right">
            <h4>570+ millon</h4>
            <span>Stolen passwords</span>
          </div>
          <div className="item text-right">
            <h4>$200 billon</h4>
            <span>In revenue by reselling identity data each year</span>
          </div>
          <div className="item text-right">
            <h4>1</h4>
            <span>Only one for you</span>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Hero;
