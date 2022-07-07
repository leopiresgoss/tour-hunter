import React from 'react';
// Select has to be customized in styling later on, this is the skeleton for it.
function FormSelect() {
  return (
    <div>
      <select className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border">
        <option value="luxury">Luxury</option>
        <option value="vip">VIP</option>
        <option value="standard">Standard</option>
      </select>
    </div>
  );
}

export default FormSelect;
