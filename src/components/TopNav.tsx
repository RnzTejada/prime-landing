import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TopNav = () => (
  <div className="navbar-area">
    <Container fluid>
      <Row>
        <Col lg="12">
          <Navbar className="pt-lg-4" expand="lg">
            <Navbar.Toggle aria-controls="nav" className="border-0 ml-auto" />
            <Navbar.Collapse className="pl-lg-5 custom-collapse" id="nav">
              <Nav.Link>
                <NavLink className="nav-item" to="">
                  HOME
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/lightpaper" className="nav-item">
                  LIGHTPAPER
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/token" className="nav-item">
                  TOKEN
                </NavLink>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TopNav;
