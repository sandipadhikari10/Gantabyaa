import React from 'react';
import './CarList.css';
import carData from './carData'; 
import { Link } from 'react-router-dom';


const CarList = () => {
  return (
    
      <>
      <div className="car-list">
        {carData.map((car) => (
          <div key={car.id} className="car-card">
            <Link to={`/vehicle/${car.id}`} className='info'>
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-details">
              <h3>{car.name}</h3>
              <span className="car-price">Rs. {car.price} per day</span>
              </div>
              </Link>
            </div>
        
        ))}
      </div>
      </>
    
  );
};

export default CarList;