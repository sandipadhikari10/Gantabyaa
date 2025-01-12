import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import './BookConfirm.css';

export default function BookConfirm() {
  const [bookingData, setBookingData] = useState();
  const [searchParams, _] = useSearchParams();
  const params = useParams();

  const vehicleId = params.id;
  const pidx = searchParams.get("pidx");

  useEffect(() => {
    fetch(`/api/vehicles/book/${vehicleId}/confirm?pidx=${pidx}`)
      .then((response) => response.json())
      .then((data) => setBookingData(data))
      .catch((error) => setBookingData(null));
  }, []);

  // verify if booking was a success, alert and show booked vehicles
  return (
    <div className="div-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: 'center', gap: '10px' }}>
      <h1>Book Confirm</h1>
      {bookingData === null && <h2>Booking Failed</h2>}
      {bookingData === undefined && <h2>Checking...</h2>}
      {!!bookingData && <>
        <h2>Booking Successful</h2>
        <p>Name: {bookingData.vehicle.name}</p>
        <p>Type: {bookingData.vehicle.type}</p>
        <p>From: {bookingData.bookingInfo.from}</p>
        <p>To: {bookingData.bookingInfo.to}</p>
      </>}
      <Link to="/bookings">Go to My Bookings</Link>
    </div>
  );
}
