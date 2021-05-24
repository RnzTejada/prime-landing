import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Logo from '../assets/img/logo-4.svg';

const Zoom = require('react-reveal/Zoom');

const Footer = () => (
  <>
    <footer className="footer">
      <Container>
        <Row>
          <Col className="border-r logo text-center py-5" lg={4} sm={12}>
            <Zoom bottom>
              <img src={Logo} alt="" />
            </Zoom>
          </Col>
          <Col className="border-r my-3" lg={4} sm={12}>
            <Zoom bottom>
              <ul>
                <li>LIGHTPAPER</li>
                <li>TOKEN</li>
              </ul>
            </Zoom>
          </Col>
          <Col className="questions my-5" lg={4} sm={12}>
            <Zoom bottom>
              <Row>
                <Col sm={12}>
                  <h5>Any questions?</h5>
                </Col>
                <Col sm={12}>
                  <Button className="btn-main" variant="">
                    Contact Us
                  </Button>
                </Col>
              </Row>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </footer>
    <div className="copy ">Prime 2021. All rights reserved.</div>
  </>
);

export default Footer;
