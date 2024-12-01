import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom"


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
        <h2 className="navbar-header">
        <Link className="no-underline text-black hover:text-blue-500" aria-current="page" to="/">Gantabya</Link>
        </h2>
      </div>
    <div className="navbar-links">
    <ul>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/bikes">Bike</Link></li>
              <li className="nav-item"><Link className="nav-link"  to="/cars">Cars</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/aboutus">About us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login/signUp</Link></li>

         
            
            

          </ul>
      </div>

  
    </nav>
  
    </>
  );
};
  


export default Navbar;
