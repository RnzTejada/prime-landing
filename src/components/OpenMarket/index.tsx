import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Slide = require('react-reveal/Slide');

const OpenMarket = () => (
  <section className="section-marketplace">
    <Container>
      <Row>
        <Col sm={12}>
          <Slide right>
            <div className="section-title py-4">
              <span>earnings</span>
              <h2 className="text-white">AN OPEN MARKETPLACE</h2>
            </div>
          </Slide>
        </Col>
      </Row>
      <Slide top>
        <Row className="mb-5">
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">Information As Currency</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">Slice Of The Pie</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">Slice Of The Pie</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">
                Transactions Stored On Our Blockchain
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
          </Col>
        </Row>
      </Slide>
    </Container>
  </section>
);

export default OpenMarket;
