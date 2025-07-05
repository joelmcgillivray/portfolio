import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { techCategories } from '../constants/techStackData';
import TechCard from './TechCard';

const TechStack = ({ darkMode }) => {
  return (
    <Container className="my-5">
      <h3 className={`text-center mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
        Tech Stack & Experience
      </h3>

      {techCategories.map((category, catIdx) => (
        <div key={catIdx} className="mb-5">
          <h5 className={`mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
            {category.label}
          </h5>

          <Row className="justify-content-start">
            {category.items.map((item, idx) => (
              <Col
                key={idx}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4 d-flex align-items-stretch"
              >
                <TechCard
                  name={item.name}
                  years={item.years}
                  icon={item.icon}
                  darkMode={darkMode}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default TechStack;
