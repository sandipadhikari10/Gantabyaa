
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

  useEffect(() => {
    fetch(`/api/vehicles/${id}`)
      .then((response) => response.json())
      .then((data) => setVehicle(data));
  }, []);
  console.log(vehicle)

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
            <table>
              <tbody>
                {isBike ? (
                  // Bike-specific details
                  <>
                    
                    <tr>
                      <td>Fuel Type :</td>
                      <td>{vehicle.fuelType}</td>
                    </tr>
                    <tr>
                      <td>Seat Capacity :  </td>
                      <td>{vehicle.seatingCapacity}</td>
                    </tr>
            
                    <tr>
                      <td>Model Year :</td>
                      <td>{vehicle.modelYear}</td>
                    </tr>
                    <tr>
                      <td>Price PerDay :</td>
                      <td>Rs {vehicle.pricePerDay}</td>
                    </tr>
                    <tr>
                      <td>Bike Description :</td>
                      <td>{vehicle.description}</td>
                    </tr>
                  </>
                ) : (
                  // Car-specific details
                  <>
                 <tr>
                      <td>Fuel Type :</td>
                      <td>{vehicle.fuelType}</td>
                    </tr>
                    <tr>
                      <td>Seat Capacity :  </td>
                      <td>{vehicle.seatingCapacity}</td>
                    </tr>
            
                    <tr>
                      <td>Model Year :</td>
                      <td>{vehicle.modelYear}</td>
                    </tr>
                    <tr>
                      <td>Price PerDay :</td>
                      <td>Rs {vehicle.pricePerDay}</td>
                    </tr>
                    <tr>
                      <td>Car Description :</td>
                      <td>{vehicle.description}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            <form method="POST" action={`/api/vehicles/book/${id}`}>
              <div className="Location-details">
                <h3>Select a DropOff Location</h3>
                <MapContainer
                  center={[28.26689, 83.96851]} // Initial map center (Kathmandu)
                  zoom={10}
                  style={{ width: "350px", height: "350px" }
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
                <input type="string" name="pickupCoords" hidden value={selectedLocation ? JSON.stringify(selectedLocation) : undefined} required />
                <input type="date" name="from" placeholder="Pick Up Date" required/>
                <input type="date" name="to" placeholder="Drop Off Date" required/>
                <button className="pay-btn">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h2 className="second-item">Corresponding Vehicles</h2>
      <p className="second-para">
        We understand if this vehicle isn't the perfect fit. You're more than
        welcome to browse and select another option that better suits your
        journey.
      </p>

      <FinalBikeList />
      <CarList />
    </>
  );
};

export default VehicleDetail;
