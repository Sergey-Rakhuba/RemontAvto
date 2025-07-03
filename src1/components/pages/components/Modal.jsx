import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, serviceData }) => {
  if (!isOpen) return null;

  const parameters = [
    { name: 'Тип роботи', value: serviceData.type || 'Покрашення' },
    { name: 'Термін виконання', value: serviceData.time || '1-2 дні' },
    { name: 'Матеріали', value: serviceData.materials || 'Оригінальні матеріали' },
    { name: 'Гарантія', value: serviceData.warranty || '1 рік' },
    { name: 'Ціна', value: serviceData.price || 'Від 5000 грн' }
  ];

  return (
    // <div className="modal-overlay" onClick={(e) => {
    //   // Закриваємо модальне вікно тільки якщо натиснуто поза вмістом
    //   if (e.target === e.currentTarget) {
    //     onClose();
    //   }
    // }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} onMouseEnter={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Деталі послуги</h2>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-parameters">
          {parameters.map((param, index) => (
            <div key={index} className="parameter-item">
              <span className="parameter-name">{param.name}:</span>
              <span className="parameter-value">{param.value}</span>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Modal;
