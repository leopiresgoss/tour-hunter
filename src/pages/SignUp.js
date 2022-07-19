import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCheck } from 'react-icons/ai';
import Button from '../components/Button';
import CreateUser from '../api/SignUp';
import LOGO from '../images/Tour-Hunter.png';
import Message from '../components/Message';
import { updateSignedInStatus } from '../redux/reducers/users';

export default function SignUp() {
  const signedIn = useSelector((state) => state.signedIn);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateSignedInStatus('Request sent'));
    const submit = async () => {
      const response = await CreateUser(formData);
      if (response === '{"message":"Signed up."}') {
        dispatch(updateSignedInStatus('Waiting for confirmation'));
      } else {
        dispatch(updateSignedInStatus('Failed'));
      }
    };

    submit();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <div className="min-h-screen bg-orange bg-opacity-80 bg-no-repeat bg-cover flex flex-col justify-center items-center">
      {
        // eslint-disable-next-line no-nested-ternary
        signedIn === 'Waiting for confirmation' ? (
          <Message
            className="bg-white"
            message="Thanks for signing up! We'll send you an email to confirm your account.In case you don't see it in your inbox, please check your spam folder."
            title="Success"
            type="success"
            color="black"
            duration={20000}
            icon={<AiOutlineCheck />}
          />
        ) : signedIn === 'Failed' ? (
          <Message
            className="bg-white"
            message="Filed to sign up. Please try again later."
            title="Failed"
            type="alert"
            color="Red"
            duration={10000}
          />
        ) : ''
      }
      <div
        className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(https://www.fanabc.com/english/wp-content/uploads/2021/08/Tourism-Danakil-Depression.jpg)' }}
      />
      <img
        src={LOGO}
        alt="logo"
        className="transform scale-75 mt-4 md:mt-0 mb-8"
      />
      <div className="md:w-full max-w-sm">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4 flex flex-col gap-2">
          <h1 className="mb-4 text-2xl font-semibold text-center">Sign Up</h1>
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
            btnName={signedIn === 'Request sent' ? 'Signing up ... ' : 'Sign up'}
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
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
