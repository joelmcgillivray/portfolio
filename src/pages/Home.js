import React from 'react';
import { Container } from 'react-bootstrap';
import TechStack from '../components/TechStack';


const Home = ({ darkMode }) => (
    <>
        <Container className={`mt-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Joel McGillivray — a software developer passionate about building great digital experiences.</p>
        </Container>

        <TechStack darkMode = {darkMode} /> 
    </>
  
);

export default Home;