import React from 'react';
import './contacts.css';

const About = () => {
  return (
    <div className="contact-page">
      <section className="about-content">
        <div className="container">
          <div className="about-info">
            <h2>Наша компанія</h2>
            <p>Ми - професійна автомайстерня з досвідом роботи понад 10 років. Наша команда складається з кваліфікованих спеціалістів, які володіють сучасними технологіями та методами ремонту автомобілів.</p>
          </div>
          <div className="about-services">
            <h2>Нашa адреса</h2>
            <ul>
              <li> м. Київ, вул. Преремоги, д. 1</li>
              <li> info@autorepair.ua</li>
              <li> +38 (066) 255-22-33</li>
              {/* <li><div className="social-links">
                            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faVk} className="social-icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                            </a>
                          </div></li> */}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
