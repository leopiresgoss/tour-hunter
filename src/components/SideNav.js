import React from 'react';
import {
  FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const Links = [
    { id: 'Home', src: 'Home' },
    { id: 'Reservation', src: 'My Reservation' },
    { id: 'Details', src: 'Details' },
    { id: 'register', src: 'Register' },
    { id: 'signout', src: 'Sign Out' },

  ];

  const handleClick = () => {
    const nav = document.querySelector('.side-nav');
    nav.classList.toggle('hidden');
  };

  return (
    <div className="side-nav z-10">

      <Link to="/" className="text-3xl pl-2 flex align-middle justify-between">
        Logo
        <button type="button" onClick={handleClick}>
          <ImCross className="text-gray-dark hover:text-red text-xl cursor-pointer m-2" />
        </button>
      </Link>
      <nav>
        <ul className="list-none flex flex-col gap-2 text-lg">
          {Links.map((link) => (
            <li key={link.id} className="w-full hover:bg-green px-2 py-3 transition duration-300 ease hover:text-white ">
              <Link to="/" className="uppercase font-bold tracking-wider  ">{link.src}</Link>
            </li>
          ))}

        </ul>
      </nav>
      <div className="flex flex-col align-middle gap-2 w-full">
        <ul className="flex mx-auto gap-1">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="hover:text-green transition duration-300 ease"
              rel="noreferrer"
            >
              <FaTwitter className="side-nav-social" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              className="hover:text-green transition duration-300 ease"
              rel="noreferrer"
            >
              <FaFacebookF className="side-nav-social" />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              className="hover:text-green transition duration-300 ease"
              rel="noreferrer"
            >
              <TiSocialGooglePlus className="side-nav-social " />
            </a>
          </li>
          <li>
            <a
              href="https://www.vimeo.com"
              target="_blank"
              className="hover:text-green transition duration-300 ease"
              rel="noreferrer"
            >
              <FaVimeoV className="side-nav-social " />
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              className="hover:text-green transition duration-300 ease"
              rel="noreferrer"
            >
              <FaPinterestP className="side-nav-social" />
            </a>
          </li>
        </ul>
        <p className="uppercase tracking-wider text-sm mx-auto">&copy;2022 Tour App</p>
      </div>
    </div>
  );
};

export default SideNav;
