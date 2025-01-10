import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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


  return <div>
    <h1>My Bookings</h1>
    <div style={{ display: "flex", flexWrap: 'wrap', gap: '10px' }}>
      {!!bookings.length ? bookings.map((booking) => (
        <Link to={`/vehicle/${booking.vehicle._id}`} key={booking.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <h2>{booking.vehicle.name}</h2>
          <p>{booking.vehicle.type}</p>
          <p>From: {booking.bookingInfo.from}</p>
          <p>To: {booking.bookingInfo.to}</p>
          <p>Status: {booking.bookingInfo.status}</p>
        </Link>
      )) : <div>No bookings yet</div>}
    </div>
  </div>
};

export default MyBookings;
