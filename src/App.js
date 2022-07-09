import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservationDetails from './pages/ReservationDetails';
// import Homepage from './components/Homepage';
import SideNav from './components/SideNav';
import ReserveForm from './pages/ReserveForm';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav btnColor="text-white" />

      <SideNav />
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}

        <Route path="/reservations/:id" element={<ReservationDetails />} />
        <Route path="/reserve-tour/:id" element={<ReserveForm />} />
      </Routes>
    </div>
  );
}

export default App;
