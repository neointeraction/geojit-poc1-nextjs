import React from 'react';
import './modal.css';
import { SlClose } from 'react-icons/sl';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen ? 'modal-overlay open' : 'modal-overlay';

  return (
    <div className={modalClass} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          <SlClose />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
