import React from "react";
import { useParams } from "react-router-dom";
import "./VehicleDetails.css";
import hondacrf from '../assets/bikes/crf.jpg';
import bikeData from "../lists/bikeData";



 



const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = bikeData.find((v) => v.id === parseInt(id));

  return (
    <>
    <div className="vehicle-detail-container">
    {/* <h1>{vehicle.name}</h1> */}
     
      <div className="detail-header">
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
        <div className="vehicle-info">
          <h1>{vehicle.name}</h1>
          <p>{vehicle.type}</p>
          <table>
            <tbody>
              <tr><td>Engine Capacity:</td>{""}<td>{vehicle.details.engine}</td></tr>
              <tr><td>Tank Capacity:</td><td>{vehicle.details.tank}</td></tr>
              <tr><td>Mileage:</td><td>{vehicle.details.mileage}</td></tr>
              <tr><td>Gears:</td><td>{vehicle.details.gears}</td></tr>
              <tr><td>Brake:</td><td>{vehicle.details.brake}</td></tr>
              <tr><td>Insurance:</td><td>{vehicle.details.insurance}</td></tr>
            </tbody>
          </table>
          <div className="Location-details">
            <input type="text" placeholder="Location" />
            <input type="date" placeholder="Pick Up Date" />
            <input type="date" placeholder="Drop Off Date"/>
            <button className="pay-btn">Pay</button>
          </div>
        </div>
      </div>

      </div>
      <h2 className="second-item">Corresponding Vehicles</h2>
      <p>We understand if this vehicle isn't the perfect fit  you're more than welcome to browse and 
      select another option that better suits your journey."</p>;
      <div className="corresponding-vehicles">
     
      </div>
    

    </>
  );
};

export default VehicleDetail;
