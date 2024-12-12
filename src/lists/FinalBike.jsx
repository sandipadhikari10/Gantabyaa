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
              <h3>{bike.name}</h3>
            <div className="bike-details">
              <div className='details-show'>
              <div><p>Free Cancelation</p>
              <p>Instant Booking</p></div>
              <div><p>{bike.feature}</p>
              <p>{bike.type}</p></div>
              </div>
           
              <div className="bike-price">Rs. {bike.price} per day</div>
              </div>
              </Link>
            </div>
        
        ))}
      </div>
      </>

      
    
  );
};

export default FinalBikeList;