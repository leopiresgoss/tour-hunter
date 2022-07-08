import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

const TopNav = () => {
  const buttonName = <BiSearch className="text-green rotate-90 text-lg" />;
  return (
    <div className="w-full p-4 absolute top-0 left-0">
      <ul className="flex flex-row justify-between align-middle">
        <li>
          <HiMenuAlt4 className="text-white text-5xl cursor-pointer" />
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

export default TopNav;
