import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import SignInUser from '../api/SignIn';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    SignInUser(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h1 className="pt-16 mb-4 text-3xl font-semibold text-center">Login Here</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input className="form-input" type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
        <input className="form-input" type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
        <Button btnName="Sign In" btnType="submit" bgColor="bg-green text-white mt-4" />
      </form>
    </Container>
  );
}
