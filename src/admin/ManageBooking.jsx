import React from "react";
import "./ManageBooking.css";
import Sidebar from "./Sidebar";

const ManageBooking = () => {
  const bookings = [
    {
      id: 1,
      name: "John Doe",
      vehicle: "Toyota Corolla",
      from: "2024-12-01",
      to: "2024-12-05",
      status: "Finished",
    },
    {
      id: 2,
      name: "Jane Smith",
      vehicle: "Honda Civic",
      from: "2024-12-03",
      to: "2024-12-10",
      status: "Ongoing",
    },
    {
      id: 3,
      name: "Avisekh Bhattarai",
      vehicle: "Lamborghini",
      from: "2024-12-03",
      to: "2024-12-10",
      status: "Ongoing",
    },

  ];

  return (
    <div className="main-managebooking">
      <Sidebar/>

   
    <div className="manage-booking">
      <h1>Manage Booking</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Vehicle</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.vehicle}</td>
              <td>{booking.from}</td>
              <td>{booking.to}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageBooking;
