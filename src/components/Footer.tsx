import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/img/logo-3.svg';

const Footer = () => (
  <>
    <footer className="footer">
      <Container>
        <Row>
          <Col className="border-r logo text-center mt-5 pb-5" lg={4} sm={12}>
            <img src={Logo} alt="" />
          </Col>
          <Col className="border-r my-3" lg={4} sm={12}>
            <ul>
              <li>home</li>
              <li>broken system</li>
              <li>new paradigm</li>
              <li>open marketplace</li>
              <li>start now</li>
            </ul>
          </Col>
          <Col className="questions my-5" lg={4} sm={12}>
            <Row>
              <Col sm={12}>
                <h5>Any questions?</h5>
              </Col>
              <Col sm={12}>
                <button className="btn btn-main" type="button">
                  Contact Us
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
    <div className="copy ">Prime 2021. All rights reserved.</div>
  </>
);

export default Footer;
