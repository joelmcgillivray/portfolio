import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ darkMode }) => (
    <Container className={`mt-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
    <h2 className="mb-4">Projects</h2>
    <Row>
      <Col md={6}>
        <ProjectCard
                title="Developer Portfolio Website"
                description="A responsive, single-page portfolio built using React and Bootstrap to showcase my software development work. Designed with a custom light/dark mode toggle, animated UI components, and mobile-first responsiveness. The project leverages Formspree for secure contact form handling, GitHub for version control, and ChatGPT to refine UI/UX decisions and copywriting. Technologies used include React, Bootstrap, JavaScript, HTML/CSS, and VSCode. This project reflects my front-end skills, secure form practices, component-based architecture, and attention to accessibility and user experience."
                link="examplelink"  // Replace with your actual repo
                darkMode={darkMode}
            />
      </Col>
      <Col md={6}>
        <ProjectCard
          title="Hobbyshop E-Commerce"
          description="Built using ASP.NET and C#, with Stripes API and the Blazor framework. Using HTML, CSS and bootstrap for frontend."
          link="examplelink"  //"https://github.com/yourusername/hobbyshop"
          darkMode={darkMode}
        />
      </Col>
    </Row>
    <Row>
    <Col md={6}>
        <ProjectCard
          title="TEMI Robot School Tour"
          description="Kotlin-based robot control system for a school tour, integrating with the TEMI robot's API to provide an interactive experience."
          link="examplelink"   //"https://github.com/yourusername/temi-tour"
          darkMode={darkMode}
        />
      </Col>
    </Row>
  </Container>
);

export default Projects;