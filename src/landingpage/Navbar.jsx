import React from "react";
import './Navbar.css';
import Footer from "./Footer";


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    
      <div className="navbar-contact">
        <div>📞 061 591363</div>
        <div>✉ OurGantabya@gmail.com</div>
        <div>🏠 Chipledhunga 10, Pokhara</div>
      </div>
      
    </nav>
    
    <nav className="navbar-second">
      <div>
        <h2>Gantabya</h2>
      </div>
    <div className="navbar-links">
    <ul>
            <li><a href="/">Home</a></li>
            <li><a href ="/bikes">Bikes</a></li>
            <li><a href ="/cars">Cars</a></li>
            <li><a href ="/about">About</a></li>

         
            
            

          </ul>
      </div>

  
    </nav>
  
    </>
  );
};

export default Navbar;
