import React, { useState, useEffect } from "react";
import "./ManageVehicle.css";
import Sidebar from "./Sidebar";

const ManageVehicle = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Mocked initial data; replace with API call if needed
    setVehicles([
      { id: 1, title: "ytb rvtr", brand: "BMW", price: "345345", fuel: "Petrol", modelYear: "3453" },
      { id: 2, title: "Test Demoy", brand: "BMW", price: "859", fuel: "CNG", modelYear: "2015" },
      { id: 3, title: "Lorem ipsum", brand: "Nissan", price: "563", fuel: "CNG", modelYear: "2012" },
      { id: 4, title: "Lorem ipsum", brand: "Maruti", price: "5636", fuel: "CNG", modelYear: "2012" },
      { id: 5, title: "ytb rvtr", brand: "Toyota", price: "345345", fuel: "Petrol", modelYear: "3453" },
    ]);
  }, []);

  const handleEdit = (id) => {
    const updatedTitle = prompt("Enter new vehicle title:");
    if (updatedTitle) {
      setVehicles(
        vehicles.map((vehicle) =>
          vehicle.id === id ? { ...vehicle, title: updatedTitle } : vehicle
        )
      );
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
    if (confirmDelete) {
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    }
  };

  return (
    <div className="main-managecontainer">
      <Sidebar/>
    <div className="manage-vehicle-container">
      <h1>Manage Vehicles</h1>
      <div className="vehicle-table-container">
        <h2>Vehicle Details</h2>
        <table className="vehicle-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Vehicle Title</th>
              <th>Brand</th>
              <th>Price Per day</th>
              <th>Fuel Type</th>
              <th>Model Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={vehicle.id}>
                <td>{index + 1}</td>
                <td>{vehicle.title}</td>
                <td>{vehicle.brand}</td>
                <td>{vehicle.price}</td>
                <td>{vehicle.fuel}</td>
                <td>{vehicle.modelYear}</td>
                <td>
                  <button onClick={() => handleEdit(vehicle.id)} className="edit-btn">
                    ✎
                  </button>
                  <button onClick={() => handleDelete(vehicle.id)} className="delete-btn">
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ManageVehicle;
