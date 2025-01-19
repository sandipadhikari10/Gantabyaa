import React, { useState, useEffect } from "react";
import "./ManageVehicle.css";
import Sidebar from "./Sidebar";

const ManageVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 10; // Number of vehicles to show per page

  useEffect(() => {
    fetch("/api/admin/vehicle")
      .then((response) => response.json())
      .then((data) => setVehicles(data));
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

  // Pagination calculations
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
  const totalPages = Math.ceil(vehicles.length / vehiclesPerPage);

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
                <th>Price Per Day</th>
                <th>Fuel Type</th>
                <th>Model Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentVehicles.map((vehicle, index) => (
                <tr key={vehicle._id}>
                  <td>{indexOfFirstVehicle + index + 1}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.pricePerDay}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.modelYear}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(vehicle._id)}
                      className="edit-btn"
                    >
                      ✎
                    </button>
                    <button
                      onClick={() => handleDelete(vehicle._id)}
                      className="delete-btn"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-btn ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageVehicle;
