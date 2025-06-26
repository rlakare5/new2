
import React from 'react';

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">💧</div>
          <span>ChillFizz</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('blog')}>Blog</button>
          <button onClick={() => scrollToSection('clients')}>Clients</button>
          <button className="contact-btn">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
