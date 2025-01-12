import React, { useEffect, useState } from 'react';
import './FinalBike.css';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const FinalBikeList = () => {
  const [bikeData, setBikeData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch(`/api/vehicles?type=bike&searchQuery=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setBikeData(data));
  }, [searchQuery]);

  return (
    <>
      <div style={{ padding: "90px", display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', margin: '10px 0px' }}>
          Search:
          <input type="string" value={searchQuery} style={{ width: '100%' }} onChange={e => setSearchQuery(e.currentTarget.value)} placeholder='' />
        </div>
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
      </div>
    </>
  );
};

export default FinalBikeList;
