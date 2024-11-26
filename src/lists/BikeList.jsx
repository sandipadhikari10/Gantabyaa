import React from 'react';
import './BikeList.css';
import bikeData from './bikeData';


const BikeList = () => {
  return (
    <div className="bike-list">
      {bikeData.map((bike, index) => (
        <div className="bike-card" key={index}>
          <img src={bike.image} alt={bike.name} className="bike-image" />
          <h3 className="bike-name">{bike.name}</h3>
          <p className="bike-rating">⭐ {bike.rating} ({bike.trips} trips)</p>
          <div className='bikepriceRating'>
          <span className="bike-price">Rs. {bike.price} per day</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeList;
