import React from 'react';
import './FinalBike.css';
import { Link } from "react-router-dom";
import bikeData from './bikeData'; // Import your car data here, or pass it as props


const FinalBikeList = () => {
  return (
    <>
      <div className="bike-list">
        {bikeData.map((bike, index) => (
          <div key={index} className="bike-card">
            
            <img src={bike.image} alt={bike.name} className="bike-image" />
            <div className="bike-details">
              <h3>{bike.name}</h3>
           
              <span className="bike-price">Rs. {bike.price} per day</span>
              </div>
            </div>
        
        ))}
      </div>
      </>

      
    
  );
};

export default FinalBikeList;