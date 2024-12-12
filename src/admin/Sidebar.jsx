import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
  const [isVehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setVehicleDropdownOpen(!isVehicleDropdownOpen);
  };

  return (
    <>
    <aside className="sidebar">
      <h2 className="logo">Car Rental Portal</h2>
      <ul className="menu">
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li onClick={toggleDropdown}>
          Vehicles
          <ul className={`dropdown ${isVehicleDropdownOpen ? "open" : ""}`}>
            <li>
              <Link to="/post-vehicle">Post a Vehicle</Link>
            </li>
            <li>
              <Link to="/manage-vehicle">Manage Vehicle</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/manage-booking">Manage Booking</Link>
        </li>

      </ul>
     
    </aside>
 
    </>
  );
};

export default Sidebar;
