import React from 'react';
import './CarList.css';
import carData from './carData'; // Import your car data here, or pass it as props

const CarList = () => {
  return (
    
      
      <div className="car-list">
        {carData.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-details">
              <h3>{car.name}</h3>
              <p>{car.rating} ⭐ ({car.trips} trips)</p>
              <div className='carpricerating'>
              <span className="car-price">Rs. {car.price} per day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default CarList;
