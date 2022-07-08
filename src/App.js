import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservationDetails from './pages/ReservationDetails';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations/:id" element={<ReservationDetails />} />
      </Routes>
    </div>
  );
}

export default App;
