import React from 'react';
import PropTypes from 'prop-types';
import { HiMenuAlt4 } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

const TopNav = ({ btnColor }) => {
  const handleClick = () => {
    const nav = document.querySelector('.side-nav');
    nav.classList.add('translate-x-0');
  };
  const buttonName = <BiSearch className="text-green rotate-90 text-lg " />;
  return (
    <div className=".menu-btn w-full p-4 absolute top-0 left-0 z-10">
      <ul className="flex flex-row justify-between align-middle">
        <li>
          <button type="button" onClick={handleClick}>
            <HiMenuAlt4 className={`${btnColor} text-5xl cursor-pointer`} />
          </button>
        </li>
        <li>
          <Button
            btnName={buttonName}
            btnType="button"
            bgColor="bg-white text-green"
          />
        </li>
      </ul>
    </div>
  );
};
TopNav.propTypes = {
  btnColor: PropTypes.string.isRequired,
};
export default TopNav;
