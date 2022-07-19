import React from 'react';
import PropTypes from 'prop-types';

const AccessDenied = ({ role }) => (
  <div className="mt-16 p-3 rounded mx-auto bg-reddish-100 text-reddish-600 max-w-[80%] md:max-w-[40%]">
    <span className="capitalize pr-1 font-semibold">{role}</span>
    cannot access this feature!
  </div>
);

AccessDenied.propTypes = {
  role: PropTypes.string.isRequired,
};

export default AccessDenied;
