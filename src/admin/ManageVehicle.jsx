import React, { useState, useEffect } from "react";
import "./ManageVehicle.css";
import Sidebar from "./Sidebar";

const ManageVehicle = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/api/admin/vehicle").then((response) => response.json()).then((data) => setVehicles(data));
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
      fetch(`/api/admin/vehicle/${id}`, { method: "DELETE" }).then(() => {
        setVehicles(vehicles.filter((vehicle) => vehicle._id !== id));
      });
    }
  };

  return (
    <div className="main-managecontainer">
      <Sidebar />
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
                <tr key={vehicle._id}>
                  <td>{index + 1}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.pricePerDay}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.modelYear}</td>
                  <td>
                    <button onClick={() => handleEdit(vehicle._id)} className="edit-btn">
                      ✎
                    </button>
                    <button onClick={() => handleDelete(vehicle._id)} className="delete-btn">
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
