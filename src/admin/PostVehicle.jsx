import React, { useState } from "react";
import "./PostVehicle.css";
import Sidebar from "./Sidebar";

const PostVehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    name: "Honda Shine",
    type: "bike",
    description: "This is a great bike",
    pricePerDay: 1000,
    modelYear: "2001",
    fuelType: "petrol",
    seatingCapacity: 2,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", vehicleData.name);
    formData.append("type", vehicleData.type);
    formData.append("description", vehicleData.description);
    formData.append("pricePerDay", vehicleData.pricePerDay);
    formData.append("modelYear", vehicleData.modelYear);
    formData.append("fuelType", vehicleData.fuelType);
    formData.append("seatingCapacity", vehicleData.seatingCapacity);
    const images = e.target.images.files;
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    fetch("/api/admin/vehicle", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        alert("Vehicle created successfully!");
      } else {
        alert("Error creating vehicle!");
      }
    })
  };

  return (
    <div className="main-postcontainer">
      <Sidebar />
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
                  name="name"
                  value={vehicleData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Vehicle Types</label>
                <select
                  name="type"
                  value={vehicleData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="bike">Bike</option>
                  <option value="scooter">Scooter</option>
                  <option value="car">Car</option>
                  <option value="jeep">Jeep</option>
                </select>
              </div>
              <div className="form-group">
                <label>Vehicle Overview*</label>
                <textarea
                  name="description"
                  value={vehicleData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price Per Day </label>
                <input
                  type="number"
                  name="pricePerDay"
                  value={vehicleData.pricePerDay}
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
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
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

              <div className="form-group">
                <label>Image </label>
                <input type="file" name="images" multiple />
              </div>

            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PostVehicle;
