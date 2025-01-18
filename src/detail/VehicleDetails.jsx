import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useParams } from "react-router-dom";
import "./VehicleDetails.css";
import FinalBikeList from "../lists/FinalBike";
import CarList from "../lists/CarList";
import L from "leaflet";

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [driverOption, setDriverOption] = useState("no");
  const [errorMessage, setErrorMessage] = useState(""); // Error state for location

  const handleOptionChange = (event) => {
    setDriverOption(event.target.value);
  };

  useEffect(() => {
    fetch(`/api/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => setVehicle(data));
  }, [id]);

  const handleSubmit = (event) => {
    if (!selectedLocation) {
      event.preventDefault();
      setErrorMessage("Please select a location on the map."); // Set error message
    } else {
      setErrorMessage(""); // Clear error message if location is selected
    }
  };

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
  

  const isBike = vehicle?.type === "bike";

  if (vehicle === null) {
    return <p>Vehicle not found!</p>;
  } else if (vehicle === undefined) {
    return <p>Fetching vehicle data....</p>;

  }

  return (
    <>
      <div className="vehicle-detail-container">
        <div className="detail-header">
          <img
            src={vehicle.images[0]}
            alt={vehicle.name}
            className="vehicle-image"
          />
          <div className="vehicle-info">
            <h1>{vehicle.name}</h1>
            <h2>Vehicle Detail</h2>
            <h2 className="vehicle-detail-heading">Vehicle Detail</h2>
            <table className="vehicle-detail-table">
              <tbody>
                {isBike ? (
                  <>
                    <tr>
                      <td className="label">Fuel Type:</td>
                      <td className="value">{vehicle.fuelType}</td>
                    </tr>
                    <tr>
                      <td className="label">Seat Capacity:</td>
                      <td className="value">{vehicle.seatingCapacity}</td>
                    </tr>
                    <tr>
                      <td className="label">Model Year:</td>
                      <td className="value">{vehicle.modelYear}</td>
                    </tr>
                    <tr>
                      <td className="label">Price Per Day:</td>
                      <td className="value">Rs {vehicle.pricePerDay}</td>
                    </tr>
                    <tr>
                      <td className="label">Bike Description:</td>
                      <td className="value">{vehicle.description}</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <td className="label">Fuel Type:</td>
                      <td className="value">{vehicle.fuelType}</td>
                    </tr>
                    <tr>
                      <td className="label">Seat Capacity:</td>
                      <td className="value">{vehicle.seatingCapacity}</td>
                    </tr>
                    <tr>
                      <td className="label">Model Year:</td>
                      <td className="value">{vehicle.modelYear}</td>
                    </tr>
                    <tr>
                      <td className="label">Price Per Day:</td>
                      <td className="value">Rs {vehicle.pricePerDay}</td>
                    </tr>
                    <tr>
                      <td className="label">Car Description:</td>
                      <td className="value">{vehicle.description}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <form
              method="POST"
              action={`/api/vehicles/book/${id}`}
              onSubmit={handleSubmit}
            >
              <div className="Location-details">
                <h3>Select your Location</h3>
                <MapContainer
                  center={[28.2238, 83.98786]}
                  zoom={13}
                  style={{ width: "350px", height: "350px" }}
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
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Error message display */}
                <input
                  type="string"
                  name="pickupCoords"
                  hidden
                  value={selectedLocation ? JSON.stringify(selectedLocation) : ""}
                  required
                />
                <div className="date-picker-container">
                  <div className="date-field">
                    <label htmlFor="from-date" className="date-label">From:</label>
                    <input
                      type="date"
                      id="from-date"
                      name="from"
                      placeholder="From Date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="date-field">
                    <label htmlFor="to-date" className="date-label">To:</label>
                    <input
                      type="date"
                      id="to-date"
                      name="to"
                      placeholder="To Date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
                <h3>Do you want a driver?</h3>
                <div className="driver-option-container">
                  <label className={`driver-option ${driverOption === "yes" ? "active" : ""}`}>
                    <input
                      type="radio"
                      value="yes"
                      checked={driverOption === "yes"}
                      onChange={handleOptionChange}
                    />
                    Yes
                  </label>
                  <label className={`driver-option ${driverOption === "no" ? "active" : ""}`}>
                    <input
                      type="radio"
                      value="no"
                      checked={driverOption === "no"}
                      onChange={handleOptionChange}
                    />
                    No
                  </label>
                </div>
                <button className="pay-btn">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetail;
