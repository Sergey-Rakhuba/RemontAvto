import React from 'react';
import { SERVICES } from '../data/cardBannersData.js';
import './Services.css';
import CardBanner from './components/cardBaner.jsx';

const Services = () => {
  return (
    <>
      <div className="services-page">
        <section className="services-header">
          <div className="container">
            <h1 className="h1-style al-center">Наші послуги</h1>
          </div>
        </section>
        <section className="services-content">
          <div className="container">
            <div className="services-grid">
              {SERVICES.map((card) => (
                <div className="service-item" key={card.id}>
                  <CardBanner 
                    imgCardBan={card.imgCardBan} 
                    textCardBan={card.textCardBan} 
                    IconCardBan={card.IconCardBan}
                    className="card-img-img2"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
