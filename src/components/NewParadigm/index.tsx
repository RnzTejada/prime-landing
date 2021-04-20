import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Elipse from '../../assets/img/elipse.svg';

const ParadigmSection = () => (
  <section className="section-paradigm">
    <Container className="content">
      <Row>
        <Col sm={12}>
          <div className="section-title float-lg-right  py-4">
            <h2 className="paradigm">A NEW PARADIGM</h2>
            <span>solution</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div className="item">
            <div className="image">
              <img src={Elipse} alt="" />
            </div>
            <div className="title text-center py-3">A framework of trust</div>
            <p>
              At the core of Prime are three proofs: Proof of Network, Proof of
              Humanity, and Proof of Intent. These proofs, and the underlying
              systems that support them are designed, to :a) Protect the
              integrity of you and your data and b) Secure payment for the data
              you share.
            </p>
          </div>
        </Col>{' '}
        <Col lg={4}>
          <div className="item">
            <div className="image">
              <img src={Elipse} alt="" />
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
        <Col lg={4}>
          <div className="item">
            <div className="image">
              <img src={Elipse} alt="" />
            </div>
            <div className="title text-center py-3">You’re in control</div>
            <p>
              The next step is to decentralize data storage by not requesting
              your information until you opt-in to share that data with Prime
              for a data request. This means that your data only exists on your
              mobile device - your device is, in effect, a secure and encrypted
              storage locker for your data.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ParadigmSection;
