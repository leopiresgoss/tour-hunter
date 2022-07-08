import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReservationDetails from './pages/ReservationDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/reservations/:id" element={<ReservationDetails />} />
      </Routes>
    </div>
  );
}

export default App;
