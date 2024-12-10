import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import "./Sidebar.css";
import Sidebar from "./Sidebar";
import { use } from "react";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dashboardData = [
    { title: "Reg Users", count: 5, path: "/manage-booking" },
    { title: "Listed Vehicles", count: 5, path: "/manage-vehicle" },
    { title: "Total Bookings", count: 3, path: "/details/bookings" },
    { title: "Listed Brands", count: 6, path: "/details/brands" },

    { title: "Queries", count: 1, path: "/details/queries" },
  ];

  const backgroundColors = [
    "#007bff", // Blue
    "#28a745", // Green
    "#ffc107", // Yellow
    "#17a2b8", // Teal
    "#dc3545", // Red
    "#6c757d", // Gray
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    alert("Logging Out");
  };

  return (
    <>
      <div className="dashboard-container">
        <Sidebar />

        <div className="dashboard">
          <header>
            <div className="dashhead-container">
              <h1 className="dash-head">Dashboard</h1>
              <div className="dropdown">
                <button className="dash-button" onClick={toggleDropdown}>
                  Account &#9662;
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div
                      className="dropdown-item"
                      onClick={() => alert("My Account")}
                    >
                      My Account
                    </div>
                    <div className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="dashboard-grid">
            {dashboardData.map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  backgroundColor:
                    backgroundColors[index % backgroundColors.length],
                }}
              >
                <h3>{item.count}</h3>
                <p>{item.title}</p>

                <div className="card-detail">
                  <Link to={item.path}>Full Detail →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
