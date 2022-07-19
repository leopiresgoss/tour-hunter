import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCheck } from 'react-icons/ai';
import Button from '../components/Button';
import SignInUser from '../api/SignIn';
import LOGO from '../images/Tour-Hunter.png';
import confirmAccountAPI from '../api/confirmAccount';
import { updateSignedInStatus } from '../redux/reducers/users';
import Message from '../components/Message';

export default function SignIn() {
  const signedIn = useSelector((state) => state.signedIn);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { isSignedIn, userData } = useSelector((state) => state.token);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const confirmToken = searchParams.get('confirm_token');

  useEffect(() => {
    if (confirmToken) {
      const fetchData = async () => {
        const response = await confirmAccountAPI(confirmToken);
        if (response.id) {
          dispatch(updateSignedInStatus('Confirmed'));
        } else {
          dispatch(updateSignedInStatus('Confirm failed'));
        }
      };

      fetchData();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSignedInStatus('Request sent'));
    SignInUser(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSignedIn && userData.role) { navigate('/tours'); }

  return (
    <div className="min-h-screen bg-orange bg-opacity-80 bg-no-repeat bg-cover flex flex-col justify-center items-center">
      {
        // eslint-disable-next-line no-nested-ternary
        signedIn === 'Confirmed'
          ? (
            <Message
              message="Your account has been confirmed. Please sign in to continue."
              title="Success"
              type="success"
              color="black"
              duration={10000}
              bgColor="white"
              icon={<AiOutlineCheck />}
            />
          ) : signedIn === 'Confirm failed'
            ? (
              <Message
                message="Your account has not been confirmed. Please try again later."
                title="Failed"
                type="alert"
                color="Red"
                duration={10000}
                bgColor="white"
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
          <h1 className="mb-4 text-2xl font-semibold text-center">Sign In</h1>
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
            btnName={signedIn === 'Request sent' ? 'Signing in' : 'Sign In'}
            btnType="submit"
            bgColor="bg-green text-white mt-4"
          />
        </form>
        <p className="text-center mt-6 flex gap-1 items-middle justify-center">
          Don&apos;t have an account yet?
          <Link to="/signup" className="text-center font-bold hover:text-green">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
