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
                The Prime Token facilities the exchange of information between
                buyers and sellers. Buyers acquire Prime Tokens from major
                exchanges or the community subject to availability. The market
                sets prices for the value of specific data types based on the
                availability, sensitivity, completeness and/or accuracy, and use
                case for the data. For example, healthcare data is more valuable
                than interest-graph data or browsing history.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">Personal Data Vault</div>
              <p>
                The primary function of our mobile application is to store your
                information securely. Only you can access and share this
                information. Itʼs protected by your devices built-in security
                measures like biometric identification and password but also
                Primeʼs key phrase, paper key, and PIN. All information is
                encrypted at all time.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">Prime Blockchain</div>
              <p>
                Our blockchain serves as the ledger for all exchanges on the
                Prime platform. It records the buyer name and transaction ID as
                well as the the sellers Prime ID. Though publicly available and
                immutable, our blockchain ID system does not record any
                identifiable information.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="item my-3">
              <div className="title py-3">Request for Data</div>
              <p>
                Our RFD process guarantees transparency into the data buyer,
                their use for your data, and the time period they are allowed to
                use your data. Part of this process involves agreeing to
                community rules, the completion of the tripartite proof system
                review, and a data usage agreement between the buyer and the
                community.
              </p>
            </div>
          </Col>
        </Row>
      </Slide>
    </Container>
  </section>
);

export default OpenMarket;
