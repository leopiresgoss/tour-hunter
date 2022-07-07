import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';

function App() {
  return (
    <div className="App">
      <FormInput
        inputPlaceholder="Enter your name"
        inputName="name"
        inputType="text"
        inputLabel="Leonardo"
      />
      <FormSelect />
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
