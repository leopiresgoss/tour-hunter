import React from 'react';
import PropTypes from 'prop-types';
import { BiDownArrow } from 'react-icons/bi';
// Select has to be customized in styling later on, this is the skeleton for it.
function FormSelect({ setTourPackage }) {
  const openDropDown = () => {
    const dropDown = document.getElementById('package-select');
    dropDown.focus();
  };
  return (
    <div className="my-auto relative">
      <select
        className="py-3 px-10 appearance-none rounded-full
        font-semibold text-sm bg-green bg-opacity-0 text-white
        border-white outline-none border"
        id="package-select"
        defaultValue="Select Package"
        onChange={(e) => setTourPackage(e.target.value)}
      >
        <option value={null} disabled hidden>
          Select Package
        </option>
        <option className="bg-green bg-opacity-100" value="luxury">
          Luxury
        </option>
        <option className="bg-green bg-opacity-100" value="vip">
          VIP
        </option>
        <option className="bg-green bg-opacity-100" value="standard">
          Standard
        </option>
      </select>
      <BiDownArrow
        className="text-white absolute top-1/2 z-1 right-3 transform -translate-y-1/2"
        onClick={openDropDown}
      />
    </div>
  );
}
FormSelect.propTypes = {
  setTourPackage: PropTypes.func.isRequired,
};
export default FormSelect;
