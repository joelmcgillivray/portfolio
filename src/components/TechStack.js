import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import htmlIcon from '../assets/html5.svg';
import cssIcon from '../assets/css.svg';
import reactIcon from '../assets/react.svg';
import bootstrapIcon from '../assets/bootstrap.svg';
import postgresIcon from '../assets/postgresql.svg';
import mongoIcon from '../assets/mongodb.svg';
import jiraIcon from '../assets/jira.svg';
import xcodeIcon from '../assets/xcode.svg';
import kotlinIcon from '../assets/kotlin.svg';
import dotNetIcon from '../assets/dotnet.svg';
import confluenceIcon from '../assets/confluence.svg';
import vueIcon from '../assets/vuedotjs.svg';
import swiftIcon from '../assets/swift.svg';
import sqliteIcon from '../assets/sqlite.svg';
import sourceTreeIcon from '../assets/sourcetree.svg';
import pythonIcon from '../assets/python.svg';
import githubIcon from '../assets/github.svg';
import mysqlIcon from '../assets/mysql.svg';
import androidStudioIcon from '../assets/androidstudio.svg';
import blazorIcon from '../assets/blazor.svg';
import dbeaverIcon from '../assets/dbeaver.svg';
import intellijIcon from '../assets/intellijidea.svg';
import jenkinsIcon from '../assets/jenkins.svg';
import kubernetesIcon from '../assets/kubernetes.svg';
import visualStudioCodeIcon from '../assets/visualstudio.svg';

// Grouped by category
const categories = [
    {
      label: '🧑‍💻 Languages & Markup',
      items: [
        { name: 'HTML', years: 3, icon: htmlIcon },
        { name: 'CSS', years: 3, icon: cssIcon },
        { name: 'Kotlin', years: 2, icon: kotlinIcon },
        { name: 'Python', years: 2, icon: pythonIcon },
        { name: 'Swift', years: 2, icon: swiftIcon }
      ],
    },
    {
        label: '🧰 Frameworks & Libraries',
        items: [
          { name: 'React', years: 2, icon: reactIcon },
          { name: 'Vue.js', years: 1, icon: vueIcon },
          { name: 'Blazor', years: 1, icon: blazorIcon },
          { name: 'Bootstrap', years: 2, icon: bootstrapIcon },
          { name: '.NET', years: 2, icon: dotNetIcon },
        ],
    },
    {
      label: '💾 Databases',
      items: [
        { name: 'PostgreSQL', years: 1, icon: postgresIcon },
        { name: 'MongoDB', years: 1, icon: mongoIcon },
        { name: 'MySQL', years: 1, icon: mysqlIcon },
        { name: 'SQLite', years: 1, icon: sqliteIcon }
      ],
    },
    {
      label: '🔧 Tools & Dev Platforms',
      items: [
        { name: 'GitHub', years: 2, icon: githubIcon },
        { name: 'Jira', years: 2, icon: jiraIcon },
        { name: 'Confluence', years: 2, icon: confluenceIcon },
        { name: 'SourceTree', years: 2, icon: sourceTreeIcon },
        { name: 'DBeaver', years: 2, icon: dbeaverIcon }

      ],
    },
    {
      label: '🖥️ IDEs & Environments',
      items: [
        { name: 'Visual Studio Code', years: 2, icon: visualStudioCodeIcon },
        { name: 'xCode', years: 2, icon: xcodeIcon },
        { name: 'IntelliJ', years: 2, icon: intellijIcon },
        { name: 'Android Studio', years: 2, icon: androidStudioIcon },
      ],
    },
  ];

const TechStack = ({ darkMode }) => {
  return (
    <Container className="my-5">
      <h3 className={`text-center mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
        Tech Stack & Experience
      </h3>

      {categories.map((category, catIdx) => (
        <div key={catIdx} className="mb-5">
          <h5 className={`mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
            {category.label}
          </h5>

          <Row className="justify-content-start">
            {category.items.map((tech, idx) => (
              <Col
                key={idx}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4 d-flex align-items-stretch"
              >
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
                        width: '80px',
                        height: '80px',
                        margin: '0 auto',
                        transition: 'box-shadow 0.3s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                          '0 0 10px rgba(0, 123, 255, 0.3)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = 'none')
                      }
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        title={tech.name}
                        className="img-fluid"
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>

                    <h5 className="mb-2">{tech.name}</h5>
                    <p className="mb-0">
                      {tech.years}+ year{tech.years > 1 ? 's' : ''} experience
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default TechStack;