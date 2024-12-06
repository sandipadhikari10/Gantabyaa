import React from "react";

import { Link } from "react-router-dom"
import './Footer.css'; 


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
            
            <li ><Link style={{color: 'white'}} to="/" className="footer-info">Home</Link></li>
              <li ><Link style={{color: 'white'}} to="/bikes" className="footer-info">Bikes</Link></li>
              <li ><Link style={{color: 'white'}} to="/cars" className="footer-info">Cars</Link></li>
              </ul>
            
          </div>
          <div className="footer-section">
            <ul>
            <li><Link style={{color: 'white'}} to="/aboutus" className="footer-info">About us</Link></li>
              <li>Recreation</li>
              <li>Meeting & Events</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };







export default Footer;