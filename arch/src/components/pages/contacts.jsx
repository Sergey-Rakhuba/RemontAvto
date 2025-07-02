import React from 'react';
import './ExemplsWork.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>Про нас</h1>
        </div>
      </section>
      <section className="about-content">
        <div className="container">
          <div className="about-info">
            <h2>Наша компанія</h2>
            <p>Ми - професійна автомайстерня з досвідом роботи понад 10 років. Наша команда складається з кваліфікованих спеціалістів, які володіють сучасними технологіями та методами ремонту автомобілів.</p>
          </div>
          <div className="about-services">
            <h2>Наші послуги</h2>
            <ul>
              <li>Діагностика автомобілів</li>
              <li>Ремонт двигунів</li>
              <li>Ремонт ходової частини</li>
              <li>Ремонт електрики</li>
              <li>Покрашування автомобілів</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
