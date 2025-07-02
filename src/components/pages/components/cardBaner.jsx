import React, { useState } from 'react';
import './cardBaner.css';
import Modal from './Modal';
import './Modal.css';

export const CardBanner = ({ imgCardBan, imgCardBan2, textCardBan, parentClassName, IconCardBan }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Перевіряємо, чи є клас card-img-img2
    const isInteractive = parentClassName === 'card-img-img2';

    // Прикладні параметри для кожного сервісу
    const serviceData = {
      type: textCardBan,
      time: '1-2 дні',
      materials: 'Оригінальні матеріали',
      warranty: '1 рік',
      price: 'Від 5000 грн'
    };

    return (
        <div 
            className="card-banner-item" 
            onClick={() => isInteractive && setIsClicked(!isClicked)}
            onMouseEnter={() => isInteractive && setIsHovered(true)}
            onMouseLeave={() => isInteractive && setIsHovered(false)}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
        >
            <img 
                src={isInteractive ? 
                    (isClicked ? imgCardBan2 : (isHovered ? imgCardBan2 : imgCardBan)) : 
                    imgCardBan
                } 
                alt="card banner" 
                className="card-banner-image" 
            />
            <div 
              className="card-banner-text-block" 
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              <p className="card-banner-text">{textCardBan}</p>
              <span>{IconCardBan}</span>
            </div> 
            <Modal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              serviceData={serviceData}
            />
        </div>
    )
};


export default CardBanner;