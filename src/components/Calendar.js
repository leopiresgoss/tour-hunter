import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ handleDateChange }) => {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (e) => {
    setStartDate(e);
    handleDateChange(e);
  };

  return (
    <DatePicker
      placeholderText="Select a date"
      selected={startDate}
      onChange={(e) => handleChange(e)}
      withPortal
      className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border text-center w-full placeholder:text-white"
    />
  );
};

Calendar.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
};

export default Calendar;
