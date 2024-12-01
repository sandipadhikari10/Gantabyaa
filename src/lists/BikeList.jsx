import { Link } from "react-router-dom";
import hondacrf from '../assets/bikes/crf.jpg';
import bikeData from "./bikeData";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/Footer";
import './BikeList.css';




    
  // Add more vehicles


const VehicleList = () => (
 <>

  <div className="bike-list">
    {bikeData.map((vehicle) => (
      <div key={vehicle.id}>
        
      
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
