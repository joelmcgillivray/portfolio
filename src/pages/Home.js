import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TabbedTechStack from '../components/TabbedTechStack';

const Home = ({ darkMode }) => {
  const textClass = darkMode ? 'text-light' : 'text-dark';

  return (
    <>
      <Container className={`mt-5 ${textClass}`}>
        {/* Top row: heading + button */}
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
                <h1 className={`mb-0 ${textClass}`}>👋 Hey, I'm Joel</h1>
            </Col>
        </Row>

        {/* Bottom row: subheading text full width */}
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
            <p className={`lead ${textClass}`}>
              A developer who started in QA, obsessed with clean code, testing, and bringing great ideas to life.
            </p>
          </Col>
        </Row>
      </Container>

      <TabbedTechStack darkMode={darkMode} />
    </>
  );
};

export default Home;