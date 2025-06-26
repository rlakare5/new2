
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">💧</div>
          </div>
          <p>© 2025 ChillFizz, Inc.<br />All rights reserved.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#clients">Clients</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Values</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
