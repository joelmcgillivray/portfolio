import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ darkMode }) => (
    <Container className={`mt-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
    <h2 className="mb-4">Projects</h2>
    <Row>
      <Col md={6}>
        <ProjectCard
          title="Hobbyshop E-Commerce"
          description="Built using ASP.NET and C#, with Stripe API and Blazor for frontend."
          link="examplelink"  //"https://github.com/yourusername/hobbyshop"
          darkMode={darkMode}
        />
      </Col>
      <Col md={6}>
        <ProjectCard
          title="TEMI Robot School Tour"
          description="Kotlin-based robot control system with QA test automation integration."
          link="examplelink"   //"https://github.com/yourusername/temi-tour"
          darkMode={darkMode}
        />
      </Col>
    </Row>
  </Container>
);

export default Projects;