import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Our service is our strength and our motto is customer satisfaction.</p>
        </div>
        <div className="footer-section">
          <p>
            <span role="img" aria-label="phone">📞</span> 061 591363<br/>
            <span role="img" aria-label="email">📧</span> yourgantabya.com<br/>
            <span role="img" aria-label="location">🏠</span> Chipledhunga 10, Pokhara
          </p>
        </div>
        <div className="footer-section">
          <ul>
            <li>Home</li>
            <li>Cars</li>
            <li>Bikes</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>About Us</li>
            <li>Recreation</li>
            <li>Meeting & Events</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
