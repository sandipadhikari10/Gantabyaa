import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './landingpage/Navbar';
import Login from './login/Login';

import VehicleDetail from './detail/VehicleDetails';
import CarList from './lists/CarList';
import FinalBikeList from './lists/FinalBike';
import AboutUs from './aboutus/AboutUs';
import Footer from './landingpage/Footer';
import Home from './landingpage/Home';
import Signup from './signup/SignUp';
import VehicleBookConfirm from './book/BookConfirm';
import 'leaflet/dist/leaflet.css';


import Dashboard from "./admin/Dashboard";
import ManageBooking from "./admin/ManageBooking";
import DetailsPage from "./admin/DetailsPage";
import PostVehicle from "./admin/PostVehicle";
import ManageVehicle from "./admin/ManageVehicle";

import { SessionProvider } from "./contexts/session-context";
import MyBookings from "./bookings/MyBookings";

function AppWithNavbar() {

  const location = useLocation(); // Get the current route path

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/admin", "/manage-booking", "/post-vehicle", "/manage-vehicle"];


  return (
    <>

      <SessionProvider>
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bikes" element={<FinalBikeList />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/bookings" element={<MyBookings />} />

          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/vehicle/book/:id/confirm" element={<VehicleBookConfirm />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/manage-booking" element={<ManageBooking />} />
          <Route path="/details/:type" element={<DetailsPage />} />
          <Route path="/post-vehicle" element={<PostVehicle />} />
          <Route path="/manage-vehicle" element={<ManageVehicle />} />
        </Routes>
        <Footer />
      </SessionProvider>

    </>
  )
}
function App() {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
}

export default App;
