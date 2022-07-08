import React from 'react';
import {
  FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

const SideNav = () => (
  <div className=" flex flex-col justify-between w-1/6 h-screen bg-white p-4">
    <div className="text-3xl">Logo </div>
    <nav>
      <ul className="list-none flex flex-col gap-2 text-lg">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </nav>
    <div className="flex flex-col gap-2 w-full">
      <ul className="flex align-middle gap-2">
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <TiSocialGooglePlus />
        </li>
        <li>
          <FaVimeoV />
        </li>
        <li>
          <FaPinterestP />
        </li>
      </ul>
      <p className="w-full">&copy;2022 Tour App</p>
    </div>
  </div>
);

export default SideNav;
