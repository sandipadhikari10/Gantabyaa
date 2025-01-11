import React, { useEffect, useState } from 'react';
import './CarList.css';
import { Link } from 'react-router-dom';


const CarList = () => {
  const [carData, setCarData] = React.useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(() => {
    fetch(`/api/vehicles?type=car&searchQuery=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setCarData(data));
  }, [searchQuery]);


  return (
    <>
      <div style={{ padding: "100px", display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', margin: '10px 0px' }}>
          Search:
          <input type="string" value={searchQuery} style={{ width: '100%' }} onChange={e => setSearchQuery(e.currentTarget.value)} />
        </div>
        <div className="bike-list" style={{ padding: "100px" }}>
          {!!carData.length ? carData.map((car) => (
            <div key={car._id} className="car-card">
              <Link to={`/vehicle/${car._id}`} className='info'>
                <img src={car.image} alt={car.name} className="car-image" />
                <h3 className='carName'>{car.name}</h3>
                <div className="car-details">
                  <div className='cardetails-show'>
                    <div><p>Free Cancelation</p>
                      <p>Instant Booking</p></div>
                  </div>
                  <div className="car-price">Rs. {car.price} per day</div>
                </div>
              </Link>
            </div>
          )) : <div>No data to show</div>}
        </div>
      </div>
    </>
  );
};

export default CarList;
