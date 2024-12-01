import React from 'react';
import backgroundImage from '../assets/logo/bgimage.png';
import './Home.css';

const Home = () => {
  return (
    <div className="search-container">
      {/* Background Image */}
      <img src={backgroundImage} alt="Background" className="bg-image" />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="search-content">
        <h1 className="title">
          YOUR DESTINATION <br /> OUR WHEELS
        </h1>

        {/* Search Form */}
        <div className="search-form">
          <div className="form-group">
            <label>Location</label>
            <select>
              <option>Outside Valley</option>
              <option>Inside Valley</option>
            </select>
          </div>
          <div className="form-group">
            <label>Take Away Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Visitors</label>
            <input type="number" placeholder="No. of Visitors" min={0} max={8} />
          </div>
          <button className="search-btn">Search Vehicle</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
