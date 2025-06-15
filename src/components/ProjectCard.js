import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, link, darkMode }) => {
  const cardBg = darkMode ? 'bg-secondary text-light' : 'bg-light text-dark';
  const buttonVariant = darkMode ? 'light' : 'dark';

  return (
    <Card className={`mb-4 ${cardBg}`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant={buttonVariant} href={link} target="_blank">
          View Code
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;