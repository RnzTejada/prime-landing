import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Paradigm1 from '../../assets/img/paradigm-1.svg';
import Paradigm2 from '../../assets/img/paradigm-2.svg';
import Paradigm3 from '../../assets/img/paradigm-3.svg';
import Line from '../../assets/img/line-2.svg';

const Fade = require('react-reveal/Fade');

const ParadigmSection = () => (
  <section className="section-paradigm">
    <div className="bg-item">
      <img src={Line} alt="" />
    </div>
    <Fade top>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title float-lg-right  py-4">
              <h2 className="paradigm">A NEW PARADIGM</h2>
              <span>solution</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row>
          <Col className="my-sm-5" lg={4}>
            <div className="item px-3">
              <div className="image">
                <img src={Paradigm3} alt="" />
              </div>
              <div className="title text-center py-3">A framework of trust</div>
              <p>
                At the core of Prime are three proofs:
                <br />
                1) Proof of Network
                <br />
                2) Proof of Humanity
                <br />
                3) Proof of Intent (link to Lightpaper anchor)
                <br />
                These proofs are designed to protect the integrity of the Prime
                platform by revealing details on the buyer and seller through
                the Request for Data (RFD) process. Sellers know who is buying
                their data, what they plan to use the data for, and for a
                defined duration agreed to by the community. Buyers know that
                the data they are purchasing is accurate, up to date, and
                available.
              </p>
            </div>
          </Col>{' '}
          <Col className="my-sm-5" lg={4}>
            <div className="item px-3">
              <div className="image">
                <img src={Paradigm1} alt="" />
              </div>
              <div className="title text-center py-3">The power to opt-in</div>
              <p>
                Your data is valuable. Itʼs so valuable that over $200 Billion
                USD is spent each year to acquire and resell your data. Whatʼs
                missing? You. You should be able to choose how and when your
                data is utilized by companies and governments. By opting-in
                youʼre choosing to sell your data to a known entity (Google, for
                example) for a specific purpose for a specific period of time.
                And if you donʼt want to sell your data? No problem - itʼs yours
                to control.
              </p>
            </div>
          </Col>{' '}
          <Col className="my-sm-5" lg={4}>
            <div className="item px-3">
              <div className="image">
                <img src={Paradigm2} alt="" />
              </div>
              <div className="title text-center py-3">You’re in control</div>
              <p>
                What does it mean to be in control of your data? It means you
                get to choose how, when and why your data is used. Prime makes
                this possible through a completely decentralized approach to
                data management through our blockchain called Primechain (need a
                page). All of your data is stored and encrypted locally on your
                device until you choose to share it. Thereʼs no way for Prime, a
                nefarious hacker, or even your device manufacturer to access
                your data. Itʼs yours and yours only.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  </section>
);

export default ParadigmSection;
