import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImage from "../assets/logo/pokhara.png";
import "./Home.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import begnas from "../assets/places/begnas.jpg";
import devis from "../assets/places/devis.jpg";
import fewa from "../assets/places/fewa.jpg";
import mustang from "../assets/places/mustang.jpg";
import sarangkot from "../assets/places/sarangkot.jpg";
import stupa from "../assets/places/stupa.jpg";

const destinations = [
  {
    name: "Begnas Lake",
    image: begnas,
    description:
      "Begnas Lake is a freshwater lake in Pokhara Metropolis of Kaski district of Nepal located in the south-east of the Pokhara Valley. The lake is the third largest lake of Nepal and second largest, after Phewa Lake, among the seven lakes in Pokhara Valley",
  },
  {
    name: "Devis Fall",
    image: devis,
    description:
      "Devi's Fall is a waterfall located at Pokhara in Kaski District, Nepal. The water forms a tunnel after reaching the bottom. This tunnel is approximately 500 feet long and runs 100 feet below ground level. On 31 July 1961, a Swiss male-female couple went swimming but the woman drowned in a pit because of the overflow.",
  },
  {
    name: "Phewa Lake",
    image: fewa,
    description:
      "Phewa Lake or Phewa Tal is a freshwater lake in Nepal formerly called Baidam Tal located in the south of the Pokhara Valley that includes Pokhara city and parts of Sarangkot and Kaskikot.",
  },
  {
    name: "Mustang",
    image: mustang,
    description:
      "Mustang District is one of the eleven districts of Gandaki Province and one of seventy-seven districts of Nepal which was a Kingdom of Lo-Manthang that joined the Federation of Nepal in 2008 after abolition of the Shah dynasty..",
  },
  {
    name: "Sarangkot",
    image: sarangkot,
    description:
      "Sarangkot is Ward 18 of Pokhara, Kaski District, Nepal, after it was merged into the city in 2015. It is a popular tourist destination for those who arrive in Pokhara.",
  },
  {
    name: "Shanti Stupa",
    image: stupa,
    description:
      "Shanti Stupa is a Buddhist monument on Anadu Hill of the former Pumdi Bhumdi Village Development Committee, in the district of Kaski, Nepal.",
  },
];

const Home = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };
  return (
    <>
      <div className="search-container">
        <img src={backgroundImage} alt="Background" className="bg-image" />

        <div className="overlay"></div>

        <div className="search-content">
          <div className="title-head">
            <h1 className="title">Travel Anywhere, go through your heart</h1>
            <p>Book unforgettable vehicles from trusted hosts around Pokhara</p>
          </div>

          {/* Search Form */}
          <div className="search-form">
            <div className="form-group">
              <label>Location</label>
              <select>
                <option>Outside Valley</option>
                <option>Inside Valley</option>
              </select>
            </div>
            <div className="form-group">
              <label>Take Away Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Visitors</label>
              <input
                type="number"
                placeholder="No. of Visitors"
                min={0}
                max={8}
              />
            </div>
            <button className="search-btn">Search Vehicle</button>
          </div>
        </div>
      </div>
      <div className="destination-slider">
        <h2>Search Rental Vehicles by Destination</h2>
        <p>Find Vehicles Rentals in Nepal. Always an ideal price for you.</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={-70}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {destinations.map((destination, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleDestinationClick(destination)}
            >
              <div className="destination-card">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
                <h3>{destination.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedDestination && (
          <div className="destination-description">
            <h3>{selectedDestination.name}</h3>
            <p>{selectedDestination.description}</p>
            <button onClick={() => setSelectedDestination(null)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
