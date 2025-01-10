import React, { useEffect } from 'react';
import './CarList.css';
import { Link } from 'react-router-dom';


const CarList = () => {
  const [carData, setCarData] = React.useState([]);
  useEffect(() => {
    fetch("/api/vehicles?type=car")
      .then((response) => response.json())
      .then((data) => setCarData(data));
  }, []);


  return (
    <>
      <div className="car-list">
        {carData.map((car) => (
          <div key={car._id} className="car-card">
            <Link to={`/vehicle/${car._id}`} className='info'>
              <img src={car.image} alt={car.name} className="car-image" />
              <h3 className='carName'>{car.name}</h3>
              <div className="car-details">
                <div className='cardetails-show'>
                  <div><p>Free Cancelation</p>
                    <p>Instant Booking</p></div>
                </div>
                <div className="car-price">Rs. {car.price} per day</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarList;
