import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faVk, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Контакти</h3>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faPhone} /> +38 (066) 255-22-33</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> info@autorepair.ua</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> м. Київ, вул. Преремоги, д. 1</p>  
            </div>
            <div className="social-links">
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faVk} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Послуги</h3>
            <ul>
              <li>Ремонт двигунів</li>
              <li>Ремонт КПП</li>
              <li>Діагностика</li>
              <li>Шиномонтаж</li>
              <li>Кузовний ремонт</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Полезні посилання</h3>
            <ul>
              <li>Головна</li>
              <li>Услуги</li>
              <li>О нас</li>
              <li>Контакти</li>
              <li>Відгуки</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Робочий час</h3>
            <p>Понеділок - П'ятниця: 9:00 - 20:00</p>
            <p>Субота: 10:00 - 17:00</p>
            <p>Неділя: Вихідний</p>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Авто-Ремонт. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;