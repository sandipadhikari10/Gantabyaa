import React from "react";
import { useParams } from "react-router-dom";
import "./VehicleDetails.css";
import bikeData from "../lists/bikeData";
import carData from "../lists/carData";
import FinalBikeList from "../lists/FinalBike";
import CarList from "../lists/CarList";

const VehicleDetail = () => {
  const { id } = useParams();

  // Search for the vehicle in both bikeData and carData
  const vehicle =
    bikeData.find((v) => v.id === parseInt(id)) ||
    carData.find((v) => v.id === parseInt(id));

  if (!vehicle) {
    return <p>Vehicle not found!</p>;
  }

  const isBike = bikeData.some((v) => v.id === parseInt(id)); // Check if it's a bike

  return (
    <>
      <div className="vehicle-detail-container">
        <div className="detail-header">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="vehicle-image"
          />
          <div className="vehicle-info">
            <h1>{vehicle.name}</h1>
            <p>{vehicle.type}</p>
            <table>
              <tbody>
                {isBike ? (
                  // Bike-specific details
                  <>
                    <tr>
                      <td>Engine Capacity:</td>
                      <td>{vehicle.details.engine}</td>
                    </tr>
                    <tr>
                      <td>Tank Capacity:</td>
                      <td>{vehicle.details.tank}</td>
                    </tr>
                    <tr>
                      <td>Mileage:</td>
                      <td>{vehicle.details.mileage}</td>
                    </tr>
                    <tr>
                      <td>Gears:</td>
                      <td>{vehicle.details.gears}</td>
                    </tr>
                    <tr>
                      <td>Brake:</td>
                      <td>{vehicle.details.brake}</td>
                    </tr>
                    <tr>
                      <td>Insurance:</td>
                      <td>{vehicle.details.insurance}</td>
                    </tr>
                  </>
                ) : (
                  // Car-specific details
                  <>
                    <tr>
                      <td>Engine Power:</td>
                      <td>{vehicle.details.engine || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Seating Capacity:</td>
                      <td>{vehicle.details.seats || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Fuel Type:</td>
                      <td>{vehicle.details.fuelType || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Transmission:</td>
                      <td>{vehicle.details.transmission || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Milleage:</td>
                      <td>{vehicle.details.mileage || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Insurance:</td>
                      <td>{vehicle.details.insurance}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <div className="Location-details">
              <input type="text" placeholder="Location" />
              <input type="date" placeholder="Pick Up Date" />
              <input type="date" placeholder="Drop Off Date" />
              <button className="pay-btn">Pay</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="second-item">Corresponding Vehicles</h2>
      <p className="second-para">
        We understand if this vehicle isn't the perfect fit. You're more than
        welcome to browse and select another option that better suits your
        journey.
      </p>
      
      <FinalBikeList/>
      <CarList/>
    </>
  );
};

export default VehicleDetail;
