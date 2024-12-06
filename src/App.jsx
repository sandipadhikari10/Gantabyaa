
import Navbar from './landingpage/Navbar';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import VehicleList from './lists/BikeList';
import VehicleDetail from './detail/VehicleDetails';
import CarList from './lists/CarList';
import FinalBikeList from './lists/FinalBike';
import AboutUs from './aboutus/Aboutus';
import Footer from './landingpage/Footer';
import Home from './landingpage/Home';
import 'leaflet/dist/leaflet.css';






function App() {
  
  return (

    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bikes" element={<FinalBikeList />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/detail" element={<VehicleList />} />
        
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
   </>
  )
}

export default App
