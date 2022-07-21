import React from 'react';
import { CgSpinner as CircleSpinner } from 'react-icons/cg';
import PropTypes from 'prop-types';

const Spinner = ({ color }) => (
  <div className="flex justify-center w-100 pt-16 my-auto align-middle">
    <CircleSpinner className={`animate animate-spin h-10 w-10 ${color} my-auto`} />
    <span className={`pl-1 my-auto text-xl ${color}`}>Loading ...</span>
  </div>
);

Spinner.defaultProps = {
  color: 'font-semibold text-green',
};

Spinner.propTypes = {
  color: PropTypes.string,
};

export default Spinner;
