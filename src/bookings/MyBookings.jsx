import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState(0);
  const [type, setType] = useState();
  

  const query = new URLSearchParams({
    page: page,
    limit: 10,
    ...(type && { type }),
  }).toString();

  useEffect(() => {
    fetch(`/api/vehicles/booked?${query}`)
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);
 

  return (
    <div className="my-bookings-container">
      <h1>My Bookings</h1>
      <div className="bookings-list">
       
        {!!bookings.length ? (
          bookings.map((booking) => (
            <Link
              to={`/vehicle/${booking.vehicle._id}`}
              key={booking.id}
              className="booking-card"
            >
              <h2>{booking.vehicle.name}</h2>
              
              <p>{booking.vehicle.type}</p>
              <p>From: {booking.bookingInfo.from}</p>
              <p>To: {booking.bookingInfo.to}</p>
              <p>Status: {booking.bookingInfo.status}</p>
            </Link>
          ))
        ) : (
          <div className="no-bookings">No bookings yet</div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
