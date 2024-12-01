

import EmailVerification from './email/EmailVerification'
import ForgotPassword from './forgot/forgot'
import Banner from './landingpage/Banner'
import MainLayout from './landingpage/MainLayout'
import Navbar from './landingpage/Navbar'
import SearchForm from './landingpage/SearchForm'
import BikeList from './lists/BikeList'
import Login from './login/Login'
import SignUp from './signup/SignUp'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import VehicleList from './lists/BikeList'
import VehicleDetail from './detail/VehicleDetails'
import CarList from './lists/CarList'
import FinalBikeList from './lists/FinalBike'
import AboutUs from './aboutus/Aboutus'
import Footer from './landingpage/Footer'
import Home from './landingpage/Home'





function App() {
  
  return (

    <>
     <Router>
      <Navbar/>
      <Routes>




        <Route path="/" element={<Home/>} />
        <Route path="/vehicle/:id" element={<VehicleDetail/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/bikes" element={<FinalBikeList/>} />
        <Route element={<FinalBikeList/>} />

        <Route path="/cars" element={<CarList/>} />
        <Route element={<CarList/>} />

        <Route path="/aboutus" element={<AboutUs/>} />
        <Route element={<AboutUs/>} />
        
      </Routes>
      <Footer/>
    </Router>

   
   
   
   </>
  )
}

export default App
