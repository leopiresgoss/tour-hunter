import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    inputType, inputName, inputValue, inputPlaceholder, inputLabel,
  } = props;
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {inputLabel && <label htmlFor="id">{inputLabel}</label>}
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        name={inputName}
        id="id"
        className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border"
      />
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
};
