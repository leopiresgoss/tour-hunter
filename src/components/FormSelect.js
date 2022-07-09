import React from 'react';
import { BiDownArrow } from 'react-icons/bi';
// Select has to be customized in styling later on, this is the skeleton for it.
function FormSelect() {
  return (
    <div className="my-auto relative">
      <select className="py-3 px-10 appearance-none rounded-full font-semibold text-sm bg-opacity-0 bg-green text-white border-white outline-none  border">
        <option value="none" selected disabled hidden>
          Select Package
        </option>
        <option className="bg-green bg-opacity-100" value="luxury">Luxury</option>
        <option className="bg-green bg-opacity-100" value="vip">VIP</option>
        <option className="bg-green bg-opacity-100" value="standard">Standard</option>
      </select>
      <BiDownArrow className="text-white absolute top-1/2 right-3 z-10 transform -translate-y-1/2" />
    </div>
  );
}

export default FormSelect;
