import React from 'react';
import {
  FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

const SocialIcons = () => (
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
    <p className="uppercase tracking-wider text-sm mx-auto">
      &copy;2022 Tour App
    </p>
  </div>
);
export default SocialIcons;
