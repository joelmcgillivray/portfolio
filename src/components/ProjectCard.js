import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, link, darkMode }) => {
  const cardStyle = {
    borderRadius: '1rem',
    border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ccc',
    backgroundColor: darkMode ? '#2d2f36' : '#f0f2f8',
    color: darkMode ? '#fff' : '#000',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
  };

  return (
    <Card className="mb-4" style={cardStyle}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant={darkMode ? 'outline-light' : 'dark'}
          href={link}
          target="_blank"
        >
          View Code
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;