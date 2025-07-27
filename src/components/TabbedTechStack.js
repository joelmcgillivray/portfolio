import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import techData from '../data/techData';

const TabbedTechStack = ({ darkMode }) => {
  const [key, setKey] = useState(techData[0].label);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardBg = darkMode ? 'bg-secondary text-light' : 'bg-light text-dark';
  const iconBoxBg = darkMode ? '#f8f9fa' : '#ffffff';
  const borderColor = darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #dee2e6';
  const sectionBg = darkMode ? '#2d2f36' : '#f0f2f8';
  const activeTabBg = darkMode ? '#3d3f45' : '#d0d2d8';
  const inactiveTabBg = darkMode ? '#2d2f36' : '#f0f2f8';

  return (
    <Container className="my-5">
      <section
        className="p-4 rounded-4 shadow"
        style={{ backgroundColor: sectionBg, border: borderColor }}
      >
        <h3 className={`text-center mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
          Tech Stack & Experience
        </h3>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {techData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setKey(category.label)}
              className="border-0 fw-semibold"
              style={{
                backgroundColor:
                  category.label === key ? activeTabBg : inactiveTabBg,
                color: darkMode ? '#fff' : '#000',
                padding: '8px 18px',
                borderRadius: '20px',
                transition: 'all 0.2s ease-in-out',
                fontWeight: category.label === key ? '600' : '500',
                border:
                  category.label === key
                    ? '2px solid rgba(255,255,255,0.2)'
                    : '1px solid transparent',
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <Row className="mt-2 gx-4 gy-4">
          {techData
            .find((cat) => cat.label === key)
            ?.items.map((tech, techIdx) => {
              const isActive = activeCard === techIdx;

              const handleMouseEnter = () => {
                if (!isMobile) setActiveCard(techIdx);
              };

              const handleMouseLeave = () => {
                if (!isMobile) setActiveCard(null);
              };

              const handleClick = () => {
                if (isMobile)
                  setActiveCard((prev) => (prev === techIdx ? null : techIdx));
              };

              return (
                <Col
                  key={techIdx}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Card
                    className={`text-center border-0 shadow-sm w-100 ${cardBg}`}
                    style={{
                      borderRadius: '1rem',
                      transition: 'all 0.3s ease',
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                      zIndex: isActive ? 1 : 0,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    <Card.Body>
                      <div
                        className="rounded d-flex align-items-center justify-content-center mb-3"
                        style={{
                          backgroundColor: iconBoxBg,
                          width: '50px',
                          height: '50px',
                          margin: '0 auto',
                          transition: 'box-shadow 0.3s ease-in-out',
                          cursor: 'default',
                        }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          title={tech.name}
                          className="img-fluid"
                          style={{
                            width: '30px',
                            height: '30px',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                      <h5 className="mb-2">{tech.name}</h5>
                      <p className="mb-1">
                        {tech.years}~ year{tech.years > 1 ? 's' : ''} experience
                      </p>

                      {isActive && (
                        <p
                          style={{
                            fontSize: '0.85rem',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                          }}
                          className="mt-2"
                        >
                          {tech.description ||
                            `Detailed experience with ${tech.name}. Includes projects, integrations, and best practices learned over time.`}
                        </p>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </section>
    </Container>
  );
};

export default TabbedTechStack;