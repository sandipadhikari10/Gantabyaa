import { Link } from "react-router-dom";
import React from "react";
import bikeData from "./bikeData";

import './BikeList.css';




    


const VehicleList = () => (
 <>

  <div className="bike-list">
    {bikeData.map((vehicle) => (
      <div key={vehicle.id} className="bike-card">
        
      
        <Link to={`/vehicle/${vehicle.id}`}>
          <h3>{vehicle.name}</h3>
          <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
        </Link>
      </div>
    ))}
  </div>
  
  </>
 
);

export default VehicleList;
