import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = ({ onSettingsClick, darkMode }) => {
  const bg = darkMode ? 'dark' : 'light';
  const variant = darkMode ? 'dark' : 'light';
  const linkClass = darkMode ? 'text-light' : 'text-dark';

  return (
    <Navbar bg={bg} variant={variant} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={linkClass}>
          joeldevelops
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={linkClass}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={linkClass}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className={linkClass}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={linkClass}>Contact</Nav.Link>
            <Nav.Link onClick={onSettingsClick} className={linkClass}>
              <i className="bi bi-gear me-1"></i> Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;