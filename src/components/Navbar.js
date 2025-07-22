import React from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

const MyNavbar = ({ darkMode, toggleDarkMode, theme, setTheme }) => {
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
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className={linkClass}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={linkClass}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className={linkClass}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={linkClass}>Contact</Nav.Link>

            <ToggleTheme theme={theme} setTheme={setTheme} />

            {/* Resume button - desktop */}
            <div className="d-none d-md-block">
              <Button
                variant={darkMode ? 'outline-light' : 'outline-dark'}
                href="/Joel_McGillivray_Resume.pdf"
                download
                className="ms-2 d-flex align-items-center gap-2"
                style={{ borderRadius: '999px', fontWeight: 500, padding: '0.375rem 0.75rem' }}
              >
                <img
                  src={require('../assets/download.svg').default}
                  alt="Download"
                  style={{
                    width: '16px',
                    height: '16px',
                    filter: darkMode ? 'invert(1)' : 'invert(0)',
                    transition: 'filter 0.3s ease-in-out',
                  }}
                />
                Resume
              </Button>
            </div>

            {/* Resume button - mobile */}
            <div className="d-block d-md-none mt-2">
              <Button
                variant={darkMode ? 'outline-light' : 'outline-dark'}
                href="/Joel_McGillivray_Resume.pdf"
                download
                size="sm"
                style={{
                  borderRadius: '999px',
                  fontWeight: '500',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.85rem',
                }}
              >
                <img
                  src={require('../assets/download.svg').default}
                  alt="Download"
                  style={{
                    width: '14px',
                    height: '14px',
                    filter: darkMode ? 'invert(1)' : 'invert(0)',
                    marginRight: '0.4rem',
                  }}
                />
                Resume
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;