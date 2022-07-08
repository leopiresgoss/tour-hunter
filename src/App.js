import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
