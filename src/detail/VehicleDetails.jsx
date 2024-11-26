import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import vehicles from '../data/vehicles'; // Assuming you have vehicle data here
import vehicles from '..lists/bikeData';

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);
  const similarVehicles = vehicles.filter((v) => v.type === vehicle.type && v.id !== vehicle.id);

  return (
    <div className="vehicle-details">
      <header>
        <h1>{vehicle.name}</h1>
        <p>{vehicle.description}</p>
      </header>
      
      <div className="vehicle-info">
        <img src={vehicle.image} alt={vehicle.name} />
        
        <div className="details">
          <ul>
            <li><strong>Engine Capacity:</strong> {vehicle.engineCapacity}</li>
            <li><strong>Tank Capacity:</strong> {vehicle.tankCapacity}</li>
            <li><strong>Mileage:</strong> {vehicle.mileage}</li>
            <li><strong>Gears:</strong> {vehicle.gears}</li>
            <li><strong>Brake:</strong> {vehicle.brake}</li>
            <li><strong>Insurance:</strong> {vehicle.insurance}</li>
          </ul>
          
          <div className="location-dates">
            <input type="text" placeholder="Location" />
            <input type="date" placeholder="Pick Up Date" />
            <input type="date" placeholder="Drop Off Date" />
          </div>
          
          <button className="pay-button">Pay</button>
        </div>
      </div>

      <section className="similar-vehicles">
        <h2>Corresponding Vehicles</h2>
        <div className="vehicle-grid">
          {similarVehicles.map((v) => (
            <Link to={`/vehicles/${v.id}`} key={v.id} className="vehicle-card">
              <img src={v.image} alt={v.name} />
              <div className="vehicle-info">
                <h3>{v.name}</h3>
                <p>Rs. {v.price} per day</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VehicleDetails;
