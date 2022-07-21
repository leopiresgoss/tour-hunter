import React from 'react';
import PropTypes from 'prop-types';

function FlashMessage(props) {
  const {
    className, title, message,
  } = props;

  return (
    <div className={`alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base ${className}-700 inline-flex items-center w-full alert-dismissible fade show`} role="alert">
      <strong className="mr-1">
        {title}
        {' '}
      </strong>
      {' '}
      {message}
      <button type="button" className="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline" data-bs-dismiss="alert" aria-label="Close" />
    </div>
  );
}

FlashMessage.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default FlashMessage;
