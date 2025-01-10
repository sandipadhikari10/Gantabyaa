import React, { useEffect, useState } from 'react';
import './FinalBike.css';
import { Link } from "react-router-dom";

const FinalBikeList = () => {
  const [bikeData, setBikeData] = useState([]);

  useEffect(() => {
    fetch("/api/vehicles?type=bike")
      .then((response) => response.json())
      .then((data) => setBikeData(data));
  }, []);

  return (
    <>
      <div className="bike-list" style={{ padding: "100px" }}>
        {!!bikeData.length ? bikeData.map((bike) => (
          <div key={bike.id} className="bike-card">
            <Link to={`/vehicle/${bike._id}`} className='info'>
              <img src={bike.image} alt={bike.name} className="bike-image" />
              <h3 className='bikeName'>{bike.name}</h3>
              <div className="bike-details">
                <div className='bikedetails-show'>
                  <div><p>Free Cancelation</p>
                    <p>Instant Booking</p></div>
                  <div><p>{bike.description}</p>
                    <p>{bike.type}</p></div>
                </div>

                <div className="bike-price">Rs. {bike.pricePerDay} per day</div>
              </div>
            </Link>
          </div>

        )) : <h2>No data to show</h2>}
      </div>
    </>
  );
};

export default FinalBikeList;
