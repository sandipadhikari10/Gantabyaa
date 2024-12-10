import React, { useState } from "react";
import "./PostVehicle.css";

const PostVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    title: "",
    brand: "",
    overview: "",
    price: "",
    modelYear: "",
    fuelType: "",
    seatingCapacity: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setVehicleData({ ...vehicleData, images: [...files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vehicleData); // This will log the submitted data
    alert("Vehicle details submitted!");
  };

  return (
    <div className="post-vehicle-container">
      <h1>Post A Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Basic Info</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Vehicle Title*</label>
              <input
                type="text"
                name="title"
                value={vehicleData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Vehicle Types</label>
              <select
                name="brand"
                value={vehicleData.brand}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Bike">Bike</option>
                <option value="Scooter">Scooter</option>
                <option value="Car">Car</option>
                <option value="Jeep">Jeep</option>
              </select>
            </div>
            <div className="form-group">
              <label>Vehicle Overview*</label>
              <textarea
                name="overview"
                value={vehicleData.overview}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price Per Day </label>
              <input
                type="number"
                name="price"
                value={vehicleData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Model Year*</label>
              <input
                type="text"
                name="modelYear"
                value={vehicleData.modelYear}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Fuel Type*</label>
              <select
                name="fuelType"
                value={vehicleData.fuelType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div className="form-group">
              <label>Seating Capacity*</label>
              <input
                type="number"
                name="seatingCapacity"
                value={vehicleData.seatingCapacity}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Upload Images</h2>
          <div className="form-grid">
           
              <div  className="form-group">
                <label>Image </label>
                <input type="file"  />
              </div>
            
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default PostVehicle;
