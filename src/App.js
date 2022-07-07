import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
