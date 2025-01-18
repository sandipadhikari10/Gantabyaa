import React from "react";
import "./ManageBooking.css";
import Sidebar from "./Sidebar";


const ManageBooking = () => {
  const [bookings, setBookings] = React.useState();
  const [filter, setFilter] = React.useState('');
  const query = new URLSearchParams({
    ...(filter && { bookingStatus: filter })
  }).toString();

  function fetchBookings() {
    fetch(`/api/admin/booking/list?${query}`)
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }
  React.useEffect(() => {
    setBookings(undefined)
    fetchBookings()
  }, [filter]);
  console.log(bookings)
 

  function handleUnbook(id) {
    fetch(`/api/admin/booking/${id}/unbook`, {
      method: 'POST',
    })
      .then(fetchBookings)
  }

  return (
    <div className="main-managebooking">
      <Sidebar />
      <div className="manage-booking">
        <h1>Manage Booking</h1>
        <select
          onChange={(e) => setFilter(e.target.value ? e.target.value : undefined)}
          defaultValue={filter}
        >
          <option value="">All</option>
          <option value="booked">Booked</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        {bookings && <table>
          <thead>
            <tr>
              <th>Booked By</th>
              <th>Vehicle</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.user.name}</td>
                <td>{booking.vehicle?.name}</td>
                <td>{booking.from}</td>
                <td>{booking.to}</td>
                <td>{booking.status}</td>
                <td>
                  <div>
                    <button className="btn btn-danger" onClick={() => handleUnbook(booking._id)}>Unbook</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
        {!bookings && <h2>Fetching booking data...</h2>}
      </div>
    </div>
  );
};

export default ManageBooking;
