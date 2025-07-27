import React from 'react';
import { Card, Collapse } from 'react-bootstrap';

const TechCard = ({ name, years, icon, darkMode, isExpanded, onToggle }) => {
  return (
    <Card
      className={`text-center border-0 shadow-sm w-100 ${
        darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'
      }`}
      style={{ borderRadius: '1rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
      onClick={onToggle}
    >
      <Card.Body>
        <div
          className="rounded d-flex align-items-center justify-content-center mb-3"
          style={{
            backgroundColor: darkMode ? '#f8f9fa' : '#ffffff',
            width: '50px',
            height: '50px',
            margin: '0 auto',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          <img
            src={icon}
            alt={name}
            title={name}
            className="img-fluid"
            style={{ width: '30px', height: '30px', objectFit: 'contain' }}
          />
        </div>
        <h5 className="mb-2">{name}</h5>
        <p className="mb-0">
          {years}~ year{years > 1 ? 's' : ''} experience
        </p>

        <Collapse in={isExpanded}>
          <div className="mt-3">
            <p className="small">
              {/* Add custom detail text for each tech stack if needed */}
              I’ve used {name} for various academic, personal, and production-level projects, building scalable solutions.
            </p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default TechCard;