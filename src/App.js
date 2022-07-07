import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar />
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
