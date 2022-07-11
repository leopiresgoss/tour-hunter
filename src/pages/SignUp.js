import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import CreateUser from '../api/SignUp';

export default function SignUp() {
  const [formData, setFormData] = useState({ full_name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateUser(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h1 className="pt-16">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="full_name" value={formData.full_name} placeholder="Full Name" onChange={handleChange} />
        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
        <Button btnName="Sign Up" btnType="submit" bgColor="bg-green text-white" />
      </form>
    </Container>
  );
}
