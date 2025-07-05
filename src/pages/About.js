import React from 'react';
import { Container, Badge } from 'react-bootstrap';

const About = ({ darkMode }) => {
  
  return (
    <Container className="mt-5">


      {/* Tech Career Section */}
      <section
  className="p-4 rounded-4 mb-5 shadow"
  style={{
    backgroundColor: darkMode ? '#2d2f36' : '#f0f2f8',
    border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ccc',
  }}
>
  <h4 className="mb-3">💻 My Tech Journey</h4>
  <p>
    I’ve written hundreds of Groovy scripts in ReadyAPI to test and automate API responses — not just for correctness,
    but for performance and edge cases too. I work daily with Jenkins, Kubernetes logs, GitHub, and Postman,
    and contribute to a large enterprise microservice ecosystem.
  </p>
  <p>
    Outside QA, I’ve built full-stack apps using React, C#, .NET, and MySQL — and I’m pushing hard into React & cloud development every day.
  </p>
  <p>
    This very website is one of those projects — designed and built entirely by me using React, Bootstrap, and modern UI/UX practices.
    It features responsive layouts, dark mode support, component-based architecture, and secure form handling through Formspree.
    I’ve used tools like VSCode, GitHub, and ChatGPT throughout to refine the design, copy, and structure.
  </p>

  <Badge bg="info" className="me-2">ReadyAPI</Badge>
  <Badge bg="warning" text="dark" className="me-2">React</Badge>
  <Badge bg="dark" className="me-2">Groovy</Badge>
  <Badge bg="primary" className="me-2">Bootstrap</Badge>
  <Badge bg="secondary" className="me-2">Formspree</Badge>
  <Badge bg="success" className="me-2">VSCode</Badge>
  <Badge bg="danger" className="me-2">GitHub</Badge>
  <Badge bg="light" text="dark">ChatGPT</Badge>
</section>

      {/* Education Section */}
      <section
  className="p-4 rounded-4 mb-5 shadow"
  style={{
    backgroundColor: darkMode ? '#2d2f36' : '#f0f2f8',
    border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ccc',
  }}
>        <h4 className="mb-3">🎓 Education</h4>
        <ul className="mb-0">
          <li><strong>Advanced College Diploma in Software Development</strong> – Mohawk College, 2023</li>
          <li><strong>College Diploma in Software Support</strong> – Mohawk College, 2022</li>
          <li><strong>B.A. in Social Sciences</strong> – York University, 2014</li>
        </ul>
      </section>

      {/* Bonus / Personality */}
      <section
  className="p-4 rounded-4 mb-5 shadow"
  style={{
    backgroundColor: darkMode ? '#2d2f36' : '#f0f2f8',
    border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ccc',
  }}
>        <h4 className="mb-3">🧠 Fun Facts & Extras</h4>
        <ul>
          <li>300+ production releases and 200+ bugs logged</li>
          <li>Love breaking down complex systems into understandable pieces</li>
          <li>Big on game nights, automation, and exploring cool tech stacks</li>
          <li>Happiest when learning, building, and debugging at 1am</li>
        </ul>
      </section>
    </Container>
  );
};

export default About;