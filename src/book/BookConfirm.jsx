import { useParams, useSearchParams } from "react-router-dom";

export default function BookConfirm() {
  const [searchParams, _] = useSearchParams();
  const params = useParams();

  const vehicleId = params.id;
  const pidx = searchParams.get("pidx");
  console.log(vehicleId, pidx);

  // verify if booking was a success, alert and show booked vehicles
  return (
    <div>
      <h1>Book Confirm</h1>
    </div>
  );
}
