import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      placeholderText="Select a date"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      withPortal
      className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border text-center w-full"
    />
  );
};

export default Calendar;
