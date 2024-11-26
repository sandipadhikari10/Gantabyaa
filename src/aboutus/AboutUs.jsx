import React from 'react';
import bikeImage from '../assets/bikes/backgroundimg.png'; 
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img src={bikeImage} alt="Bike" className="about-banner-image" />
        
      </div>
      <div className="about-content">
        <h2>About Gantabya</h2>
        <p>
          Gantabya, a vehicle rental system in Pokhara, provides well-maintained bikes and cars for its customers. Each vehicle is regularly serviced, ensuring that clients have a reliable and comfortable travel experience.
        </p>
        <p>
          The company offers strong client support, assisting renters throughout their journey. Whether it’s choosing the right vehicle or handling issues on the road, Gantabya is here to help.
        </p>
        <p>
          Payment is made easy with flexible and convenient options. This ensures that customers can focus on their trip without worrying about complicated transactions.
        </p>
        <p>
          A unique feature of Gantabya is the ability for clients to select vehicles based on their destination. Whether navigating mountain trails or city streets, the right vehicle is always available for the terrain.
        </p>
        <p>
          Safety is a top priority at Gantabya, allowing customers to explore new places with confidence. The system ensures smooth and secure journeys, making travel enjoyable and worry-free.
        </p>
      </div>

      
    </div>
  );
};

export default AboutUs;
