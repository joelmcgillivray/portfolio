import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SettingsModal = ({ show, handleClose, darkMode, toggleDarkMode }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
        <div className="d-flex align-items-center justify-content-start px-3 py-2">
          <span style={{ marginRight: '10px' }}>☀️</span>
          <Form>
            <Form.Check 
              type="switch"
              id="theme-switch"
              label=""
              checked={darkMode}
              onChange={toggleDarkMode}
              className="form-switch-lg"
              style={{ scale: '1.5', marginRight: '10px' }}
            />
          </Form>
          <span>🌙</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SettingsModal;