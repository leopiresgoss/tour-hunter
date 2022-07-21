import React from 'react';
import PropTypes from 'prop-types';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const NavButton = (props) => {
  const { btnDirection, bgColor } = props;

  return btnDirection === 'left' ? (
    <button
      type="button"
      className={`${bgColor} py-3 pl-8 pr-3 rounded-br-full rounded-tr-full font-semibold `}
    >
      <BiLeftArrow />
    </button>
  ) : (
    <button
      type="button"
      className={`${bgColor} py-3 pl-3 pr-8 rounded-bl-full rounded-tl-full  font-semibold mx-5`}
    >
      <BiRightArrow />
    </button>
  );
};

NavButton.propTypes = {
  btnDirection: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default NavButton;
