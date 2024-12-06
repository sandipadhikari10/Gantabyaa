import React from 'react';
import './FinalBike.css';
import { Link } from "react-router-dom";
import bikeData from './bikeData'; // Import your car data here, or pass it as props


const FinalBikeList = () => {
  return (
    <>
      <div className="bike-list">
        {bikeData.map((bike) => (
          <div key={bike.id} className="bike-card">
            <Link to={`/vehicle/${bike.id}`} className='info'>
            <img src={bike.image} alt={bike.name} className="bike-image" />
            <div className="bike-details">
              <h3>{bike.name}</h3>
           
              <span className="bike-price">Rs. {bike.price} per day</span>
              </div>
              </Link>
            </div>
        
        ))}
      </div>
      </>

      
    
  );
};

export default FinalBikeList;