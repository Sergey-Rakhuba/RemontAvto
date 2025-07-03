import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../../assets/img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Логотип" className="logo-image" />
            <span>Авто-Фарбування</span>
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'menu-open' : ''}`}>
          <li>
            <Link to="/" className="nav-link">Головна</Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">Послуги</Link>
          </li>
          <li>
            <Link to="/exemplsWork" className="nav-link">Приклади робіт</Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-link">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;