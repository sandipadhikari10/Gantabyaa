import React, { useContext, useState } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom"
import { SessionContext } from "../contexts/session-context";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const navigate = useNavigate();

  const {session, removeSession} = useContext(SessionContext);

  function handleLogout() {
    removeSession()
    alert("Logout successful!")
    navigate('/login')
  }

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">

          <div className="navbar-contact">
            <div>📞 061 591363</div>
            <div className="mailto">
              <a href="mailto:someone@example.com?subject=Hello&body=How are you?" className="email-link">
                ✉ OurGantabya@gmail.com
              </a>
            </div>
            <div>🏠 Chipledhunga 10, Pokhara</div>
          </div>

        </nav>

        <nav className="navbar-second">
          <div>
            <h2 className="navbar-header">
              <Link style={{ textDecoration: "none", color: "black" }} to="/">Gantabya</Link>
            </h2>
          </div>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/bikes">Bike</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cars">Cars</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/aboutus">About us</Link></li>
              {!session && <li className="nav-item"><Link className="nav-link" to="/login">Login/signUp</Link></li>}
              {session && <li className="nav-item"><button className="nav-link" onClick={handleLogout}>Logout</button></li>}
            </ul>
          </div>



        </nav>
      </div>

    </>
  );
};



export default Navbar;
