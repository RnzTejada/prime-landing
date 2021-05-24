import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Game from '../../assets/img/game.svg';
import Game2 from '../../assets/img/game2.svg';

const Slide = require('react-reveal/Slide');

const BrokenSection = () => (
  <section className="section-broken pb-4">
    <Container className="mb-4">
      <Slide>
        <div className="section-title py-4">
          <span>problem</span>
          <h2>A BROKEN SYSTEM</h2>
        </div>
      </Slide>
      <Row>
        <Col className="py-4 my-lg-5 center" sm={12} lg={6}>
          <Slide top>
            <img src={Game} alt="" height="250px" />
          </Slide>
        </Col>
        <Col className="py-4 my-lg-5 center" sm={12} lg={6}>
          <Slide top>
            <div className="text-left">
              <h3> Leaky Data</h3>
              <p>
                The sad truth is that your data is likely freely available on
                the internet. The story goes like this: You signed up for
                Facebook but but didnʼt rotate your password frequently. In
                April 2021,{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://haveibeenpwned.com/PwnedWebsites"
                >
                  Facebook was hacked and 500 million accounts were leaked
                </a>
                . The hackers repackaged your data and sold it to a data broker.
                The data broker sold it to an advertising analytics company
                (C)mbridge Analytica?a. The advertising analytics company uses
                Googleʼs AdWords to target ads to you and people like you. Total
                cost of the transaction? On average, around $5-10 million USD.
                Benefit to you? $0.
              </p>
            </div>
          </Slide>
        </Col>
      </Row>
      <Row className="reverse">
        <Col className="py-4 my-lg-5 center" sm={12} lg={6}>
          <Slide left>
            <img src={Game2} height="250px" alt="" />
          </Slide>
        </Col>
        <Col className="py-4 my-lg-5 center" sm={12} lg={6}>
          <Slide left>
            <div className="text-lg-right text-left">
              <h3>A System Designed to Exclude You</h3>
              <p>
                Data powers the internet. It controls the ads you see, the
                content you read, the technology you utilize. But how do
                companies acquire your data? Technology companies build products
                to track the webpages you visit, the links you click on, the
                people you talk to. Non-technology brands buy access to your
                data for advertising and content curation. But whatʼs missing?
                You. Prime puts you back in control of how and when your data is
                used.
              </p>
            </div>
          </Slide>
        </Col>
      </Row>
    </Container>
  </section>
);

export default BrokenSection;
