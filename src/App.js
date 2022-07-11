import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import ReserveForm from './pages/ReserveForm';
import TopNav from './components/TopNav';
import MyReservations from './pages/MyReservations';
import Homepage from './pages/Homepage';
import AdminAddTour from './pages/AdminAddTour';
import TourDetails from './pages/TourDetails';
import DeleteTour from './pages/DeleteTour';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <TopNav btnColor="text-green" />
      <SideNav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tours" element={<Homepage />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/reservation/new" element={<ReserveForm />} />
        <Route path="/tour/new" element={<AdminAddTour />} />
        <Route path="/tours/delete" element={<DeleteTour />} />
      </Routes>
    </div>
  );
}

export default App;
