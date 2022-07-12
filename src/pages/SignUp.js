import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import CreateUser from '../api/SignUp';

export default function SignUp() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    CreateUser(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h1 className="pt-16 mb-4 text-3xl font-semibold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="form-input"
          type="text"
          name="full_name"
          value={formData.full_name}
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Button
          btnName="Sign Up"
          btnType="submit"
          bgColor="bg-green text-white mt-4"
        />
      </form>
      <p className="text-center mt-6 flex gap-1 items-middle justify-center">
        Already have an account?
        <Link
          to="/users/sign_in"
          className="text-center font-bold hover:text-green"
        >
          Sign In
        </Link>
      </p>
    </Container>
  );
}
