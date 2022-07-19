import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import LOGO from '../images/Tour-Hunter.png';
import SocialIcons from './SocialIcons';
import signOutUser from '../api/SignOut';
import { signOut } from '../redux/reducers/token';
import { AdminLinks, UserLinks, GuestLinks } from '../constants/Links';
import Role from '../constants/Role';

const SideNav = () => {
  const dispatch = useDispatch();
  const { isSignedIn, userData } = useSelector((state) => state.token);

  const user = useSelector((state) => state.token).userData || JSON.parse(localStorage.getItem('user'));

  let Links;
  if (isSignedIn && userData.role === Role.ADMIN) {
    Links = AdminLinks;
  } else if (isSignedIn && userData.role === Role.USER) {
    Links = UserLinks;
  } else {
    Links = GuestLinks;
  }
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
        <div className="list-none flex flex-col gap-2 text-lg">
          {Links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="uppercase font-bold tracking-wider hover:bg-green focus:bg-green
              w-full px-2 py-3 transition duration-300 ease
              hover:text-white focus:text-white rounded "
              onClick={hideSideBar}
            >
              {link.src}
            </Link>

          ))}
        </div>
        {isSignedIn && (
        <button type="submit" className="btn-red" onClick={handleSignOut}>
          Sign Out
        </button>
        )}

      </nav>
      <SocialIcons />
    </div>
  );
};
export default SideNav;
