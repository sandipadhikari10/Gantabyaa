import React from "react";
import "./ManageBooking.css";
import Sidebar from "./Sidebar";

const ManageBooking = () => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/admin/booking/list")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="main-managebooking">
      <Sidebar />


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
