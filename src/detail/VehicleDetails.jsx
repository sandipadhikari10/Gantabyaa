
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useParams } from "react-router-dom";
import "./VehicleDetails.css";
import bikeData from "../lists/bikeData";
import carData from "../lists/carData";
import FinalBikeList from "../lists/FinalBike";
import CarList from "../lists/CarList";
import L from "leaflet";

const VehicleDetail = () => {

  const [selectedLocation, setSelectedLocation] = useState(null);

  // Custom hook to handle map click events
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedLocation({ lat, lng });
      },
    });

    return null;
  };


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
            <h3>Select a Pickup Location</h3>
            <MapContainer
              center={[28.26689, 83.96851]} // Initial map center (Kathmandu)
              zoom={10}
              style={{ width: "400px", height: "400px" }
            }
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapEvents />
              {selectedLocation && (
                <Marker
                  position={selectedLocation}
                  icon={new L.Icon({
                    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41],
                  })}
                >
                  <Popup>
                    Selected Location: <br />
                    Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}
                  </Popup>
                </Marker>
              )}
            </MapContainer>

            <input type="date" placeholder="Pick Up Date" />
            <input type="date" placeholder="Drop Off Date" />
            <button className="pay-btn">Book Now</button>
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
