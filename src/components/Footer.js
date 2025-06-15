import React from 'react';

const Footer = ({ darkMode }) => (
  <footer className={`text-center p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
    <p>&copy; {new Date().getFullYear()} joeldevelops. All rights reserved.</p>
  </footer>
);

export default Footer;