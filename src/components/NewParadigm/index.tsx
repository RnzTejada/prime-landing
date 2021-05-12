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
        <Row>
          <Col className="my-sm-5" lg={4}>
            <div className="item px-3">
              <div className="image">
                <img src={Paradigm3} alt="" />
              </div>
              <div className="title text-center py-3">A framework of trust</div>
              <p>
                At the core of Prime are three proofs: Proof of Network, Proof
                of Humanity, and Proof of Intent. These proofs, and the
                underlying systems that support them are designed, to:
                <br /> a) Protect the integrity of you and your data and <br />{' '}
                b) Secure payment for the data you share.
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
                The first step in securing your data is the simple choice of
                choosing when, how, and with with whom you want to share that
                data. We call this ‘opting-in.ʼ By opting in, you agree to share
                the information in the data request with the organization making
                the request.
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
                The next step is to decentralize data storage by not requesting
                your information until you opt-in to share that data with Prime
                for a data request. This means that your data only exists on
                your mobile device - your device is, in effect, a secure and
                encrypted storage locker for your data.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  </section>
);

export default ParadigmSection;
