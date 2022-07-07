import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GreenButton from './components/Button';
import NavButton from './components/NavButton';

function App() {
  return (
    <div className="App">
      <NavButton btnDirection="right" bgColor="bg-green text-white" />
      <GreenButton
        btnType="submit"
        btnName="Reserve"
        bgColor="bg-white text-black"
      />
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
