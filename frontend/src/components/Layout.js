import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link as RouterLink } from 'react-router-dom';
import '../design/NavbarDesign.css';
import Contact from './Contact';
import Link from './Link';

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="container-custom">
          <Navbar.Brand as={RouterLink} to="/">Saheeshna Kamuni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav">
              <Nav.Item>
                <Link to="/" className="nav-link">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/timeline" className="nav-link">Experience</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/projects" className="nav-link">Projects</Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Link to="/testimonials" className="nav-link">Testimonials</Link>
              </Nav.Item> */}

              <Nav.Item>
                <Link to="#" className="nav-link" onClick={handleShow} disableTransition>Contact Me</Link>
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <Contact handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Layout;
