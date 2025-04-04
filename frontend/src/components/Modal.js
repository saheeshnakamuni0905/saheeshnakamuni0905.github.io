// Modal.jsx
import React from 'react';
import '../design/ModalDesign.css';

const Modal = ({ isOpen, toggleOpen, children }) => {
  return (
    <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <div className="modal">
        {children}
      </div>
    </div>
  );
};

export default Modal;
