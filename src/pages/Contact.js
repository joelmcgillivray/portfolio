import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent XSS: basic sanitization (removes < > /)
    const sanitizedValue = value.replace(/[<>\/]/g, '');

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email.includes('@')) {
      alert('Please enter a valid name and email');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mwpbjbyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed. Try again soon.');
    }
  };

  return (
    <Container className="my-5">
      <h2 className={`mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>Contact Me</h2>

      {submitted ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Alert variant="success" className="text-center fs-4 px-4 py-3 d-flex flex-column align-items-center">
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✅</div>
                Thanks! I’ll be in touch soon.
            </Alert>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Name *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formCompany">
                <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company name (optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Email *</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="(Optional)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label className={darkMode ? 'text-light' : 'text-dark'}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write a short message (optional)"
              name="message"
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            type="submit"
            variant={darkMode ? 'light' : 'dark'}
            className="rounded-pill px-4"
          >
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Contact;