
import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import SearchForm from './SearchForm';
import Banner from './Banner';
import BikeList from '../lists/BikeList';
import AboutUs from '../aboutus/Aboutus';
import CarList from '../lists/CarList';
import FinalBikeList from '../lists/FinalBike';
import EmailVerification from '../email/EmailVerification';
import Login from '../login/Login'


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      
    <AboutUs/>
      <Footer />
    </div>
  );
};

export default MainLayout;
