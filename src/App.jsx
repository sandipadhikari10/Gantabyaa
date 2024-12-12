<<<<<<< HEAD
import Navbar from './landingpage/Navbar';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

=======
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './landingpage/Navbar';
import Login from './login/Login';
>>>>>>> main
import VehicleList from './lists/BikeList';
import VehicleDetail from './detail/VehicleDetails';
import CarList from './lists/CarList';
import FinalBikeList from './lists/FinalBike';
import AboutUs from './aboutus/AboutUs';
import Footer from './landingpage/Footer';
import Home from './landingpage/Home';
import Signup from './signup/SignUp';
import 'leaflet/dist/leaflet.css';
<<<<<<< HEAD
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
=======

import Dashboard from "./admin/Dashboard";
import ManageBooking from "./admin/ManageBooking";
import DetailsPage from "./admin/DetailsPage";
import PostVehicle from "./admin/PostVehicle";
import ManageVehicle from "./admin/ManageVehicle";

// Component to handle Navbar visibility
function AppWithNavbar() {
  const location = useLocation(); // Get the current route path

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/admin", "/manage-booking", "/post-vehicle", "/manage-vehicle"];
 
  

  return (
    <>
      {/* Render Navbar only if the current route is not in `hideNavbarRoutes` */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
     
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bikes" element={<FinalBikeList />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/detail" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/manage-booking" element={<ManageBooking />} />
        <Route path="/details/:type" element={<DetailsPage />} />
        <Route path="/post-vehicle" element={<PostVehicle />} />
        <Route path="/manage-vehicle" element={<ManageVehicle />} />
      </Routes>
   
    </>
  );
>>>>>>> main
}

function App() {
  return (
    <Router>
      <AppWithNavbar />
      
    </Router>
  );
}

export default App;
