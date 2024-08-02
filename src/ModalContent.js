// ModalContent.jsx
import React from 'react';
import styles from './ModalContent.module.css';

const ModalContent = ({ onClose, onFileSelect }) => {
  const handleFileSelectClick = () => {
    onFileSelect();
    onClose(); // Close the modal after opening file picker
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <p>Choose an action:</p>
        <button onClick={onClose}>Button 1</button>
        <button onClick={handleFileSelectClick}>Select File</button>
      </div>
    </div>
  );
};

export default ModalContent;
