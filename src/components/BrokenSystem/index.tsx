import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Game from '../../assets/img/game.svg';

const BrokenSection = () => (
  <section className="section-broken">
    <Container>
      <div className="section-title py-4">
        <span>problem</span>
        <h2>A BROKEN SYSTEM</h2>
      </div>
      <Row>
        <Col className="py-4" xs={6}>
          <img
            src={Game}
            alt="ilustration"
            height="250px"
            className="float-right"
          />
        </Col>
        <Col className="py-4" xs={6}>
          <h3>A Broke System</h3>
          <p className="text-left">
            It’s estimated that over $200 billion is spent on the acquisition
            and resale of personal identifiable information (PII) in the United
            States each year. This is data used to identify real-world people so
            that brands, agencies, and technology companies can sell, market, or
            target a specific demographic, interest group, or characteristic of
            that person. For context, that is roughly equivalent to the gross
            domestic product (GDP) of New Zealand.
          </p>
        </Col>
        <Col className="py-4" xs={6}>
          <h3 className="text-right">No Control Over the Flow of Data</h3>
          <p className="text-right">
            Where is this data coming from and how is it used? Why are you, the
            individual, not in control of how, why, and where your data is used?
            Why are you not compensated for when your data is used? These are
            the exact problems that we at Prime are setting out to solve.{' '}
          </p>
        </Col>
        <Col className="py-4" xs={6}>
          <img src="" alt="ilustration" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default BrokenSection;
