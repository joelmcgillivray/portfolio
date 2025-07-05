import React from 'react';
import { Card } from 'react-bootstrap';

const TechCard = ({ name, years, icon, darkMode }) => {
  return (
    <Card
      className={`text-center border-0 shadow-sm w-100 ${
        darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'
      }`}
      style={{ borderRadius: '1rem' }}
    >
      <Card.Body>
        <div
          className="bg-light rounded d-flex align-items-center justify-content-center mb-3"
          style={{
            width: '50px',
            height: '50px',
            margin: '0 auto',
            transition: 'box-shadow 0.3s ease-in-out',
            cursor: 'default',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              '0 0 10px rgba(0, 123, 255, 0.3)')
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
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
      </Card.Body>
    </Card>
  );
};

export default TechCard;