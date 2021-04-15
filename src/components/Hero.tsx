import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../assets/img/logo-3.svg';

const Hero = () => (
  <div>
    <Row>
      <Col className="justify-content-center align-items-center d-flex" lg={6}>
        <div>
          <img src={Logo} height="80px" alt="logo" />
          <h3 className="py-3 title">
            It's time for you to regain control of your data
          </h3>
          <button type="button" className="btn btn-main">
            Start Now
          </button>
        </div>
      </Col>
      <Col lg={6}>
        <div className="timeline-area float-lg-right">
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
  </div>
);

export default Hero;