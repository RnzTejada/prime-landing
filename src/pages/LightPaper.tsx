import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Paper from '../components/Paper';

const LightPaper: React.FC = () => (
  <section className="section mb-4">
    <Container>
      <Row>
        <Col xs={12}>
          <Paper className="text" />
        </Col>
        <Col className="center d-flex justify-content-center" xs={12}>
          <a
            id="dbutton"
            // eslint-disable-next-line global-require
            href={`${process.env.PUBLIC_URL}/Lightpaper.pdf`}
            download
            className="btn btn-main"
          >
            Download
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default LightPaper;
