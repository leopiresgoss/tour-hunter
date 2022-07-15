import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import LOGO from '../images/Tour-Hunter.png';
import SocialIcons from './SocialIcons';
import signOutUser from '../api/SignOut';
import { signOut } from '../redux/reducers/token';

const SideNav = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.signedIn);
  const user = useSelector((state) => state.token).userData || JSON.parse(localStorage.getItem('user'));

  const Links = [
    { id: 'Home', src: 'Home', path: '/tours' },
    { id: 'Reservation', src: 'My Reservations', path: '/reservations' },
    { id: 'new-tour', src: 'New Tour', path: '/tour/new' },
    { id: 'delete', src: 'Delete Tour', path: '/tours/delete' },
    {
      id: 'signout',
      src: signedIn === 'Not signed in' ? 'Sign up' : 'Sign in',
      path: signedIn === 'Not signed in' ? '/signup' : '/',
    },
    { id: 'signin', src: 'Sign In', path: '/users/sign_in' },
  ];

  const hideSideBar = () => {
    const nav = document.querySelector('.side-nav');
    nav.classList.remove('translate-x-0');
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
    localStorage.removeItem('user');
    signOutUser(user);
  };

  return (
    <div className="side-nav" onMouseLeave={hideSideBar}>
      <Link to="/" className="p-0 mt-4 -ml-5">
        <img
          src={LOGO}
          alt="logo"
          className="transform scale-75 rotate-[-15deg]"
        />
      </Link>
      <GrFormClose
        className="text-4xl md:hidden cursor-pointer absolute top-2 right-2 hover:text-gray-dark"
        onClick={hideSideBar}
      />
      <nav>
        <ul className="list-none flex flex-col gap-2 text-lg">
          {Links.map((link) => (
            <li
              key={link.id}
              className="w-full hover:bg-green px-2 py-3 transition duration-300 ease hover:text-white "
            >
              <Link
                to={link.path}
                className="uppercase font-bold tracking-wider  "
                onClick={hideSideBar}
              >
                {link.src}
              </Link>
            </li>
          ))}
        </ul>
        <button type="submit" className="btn-green" onClick={handleSignOut}>
          SignOut
        </button>
      </nav>
      <SocialIcons />
    </div>
  );
};
export default SideNav;
