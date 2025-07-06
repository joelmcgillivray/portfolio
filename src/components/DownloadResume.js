import React from 'react';
import { Container } from 'react-bootstrap';
import downloadIcon from '../assets/download.svg';

const DownloadResume = ({ link = '', darkMode }) => {
  // Soft background & text contrast
  const bgClass = darkMode ? 'bg-secondary text-light' : 'bg-light text-dark';
  const hoverShadow = darkMode
    ? '0 0 12px rgba(255, 255, 255, 0.3)'
    : '0 0 10px rgba(0, 0, 0, 0.2)';

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <a
        href={link || '#'} // fallback if no link provided
        download // triggers "Save As" browser behavior
        className={`d-flex align-items-center gap-3 px-4 py-2 rounded-pill text-decoration-none shadow ${bgClass}`}
        style={{
          border: '2px solid transparent',
          transition: 'box-shadow 0.2s ease-in-out',
          cursor: link ? 'pointer' : 'not-allowed',
          opacity: link ? 1 : 0.6,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = hoverShadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
        onClick={(e) => {
          if (!link) e.preventDefault(); // disable click if link is blank
        }}
      >
        {/* Circle icon */}
        <div
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            backgroundColor: '#ffffff', // white circle always
            width: '40px',
            height: '40px',
          }}
        >
          <img
            src={downloadIcon}
            alt="Download"
            style={{
              width: '20px',
              height: '20px',
              filter: 'none', // always show icon as-is (black) 
            }}
          />
        </div>

        {/* Label */}
        <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Resume</span>
      </a>
    </Container>
  );
};

export default DownloadResume;