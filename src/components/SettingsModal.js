import React from 'react';
import { Modal, Form } from 'react-bootstrap';

const SettingsModal = ({ show, handleClose, darkMode, toggleDarkMode }) => {
  const bgClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName={`${bgClass} rounded-4 border-0`} // fully rounded, unified background
    >
      <Modal.Header closeButton className={`border-0 ${bgClass}`}>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body
        className={`d-flex flex-column align-items-center justify-content-center ${
          darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
        } rounded-bottom-2 pt-4 pb-4`}
      >
        <p className="mb-4">Toggle Light / Dark Mode</p>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: '1.75rem' }} // more space between icon and switch
        >
          <span
            role="img"
            aria-label="Light Mode"
            style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} // Add extra spacing here
            >
            ☀️
          </span>

          <Form.Check
            type="switch"
            id="theme-switch"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="form-switch m-0"
            style={{ transform: 'scale(1.5)' }}
          />

          <span role="img" aria-label="Dark Mode" style={{ fontSize: '1.25rem' }}>
            🌙
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsModal;