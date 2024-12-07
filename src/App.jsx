import Navbar from './landingpage/Navbar';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VehicleList from './lists/BikeList';
import VehicleDetail from './detail/VehicleDetails';
import CarList from './lists/CarList';
import FinalBikeList from './lists/FinalBike';
import AboutUs from './aboutus/AboutUs';
import Footer from './landingpage/Footer';
import Home from './landingpage/Home';
import Signup from './signup/SignUp';
import 'leaflet/dist/leaflet.css';
import { SessionProvider } from "./contexts/session-context";

function App() {
  return (
    <>
      <Router>
        <SessionProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bikes" element={<FinalBikeList />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/detail" element={<VehicleList />} />

            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </SessionProvider>
      </Router>
    </>
  )
}

export default App
