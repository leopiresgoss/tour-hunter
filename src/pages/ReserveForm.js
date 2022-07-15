import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import makeReservation from '../api/ReserveTour';
import DropDown from '../components/DropDown';

const ReserveForm = () => {
  const dispatch = useDispatch();
  const [tourPackage, setTourPackage] = useState({
    tour_date_id: '',
    package: '',
  });

  const handleChange = (e, id) => {
    if (e.target.parentElement.id === 'tour-date') {
      setTourPackage({
        ...tourPackage,
        tour_date_id: id,

      });
    } else {
      setTourPackage({
        ...tourPackage,
        package: e.target.textContent,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(tourPackage));
  };

  const packageOptions = [
    { id: 1, option: 'Standard' },
    { id: 2, option: 'VIP' },
    { id: 3, option: 'Luxury' },
  ];

  const tourDates = [
    { id: 1, option: '1/1/2020' },
    { id: 2, option: '1/2/2020' },
    { id: 3, option: '1/3/2020' },
    { id: 4, option: '1/4/2020' },
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-green overflow-hidden bg-opacity-80">

      <img
        className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
        src="https://www.fanabc.com/english/wp-content/uploads/2021/08/Tourism-Danakil-Depression.jpg"
        alt="reserve-form-bg"
      />

      <div className="flex flex-col mx-auto justify-center align-middle">
        <h2 className="text-2xl mx-auto font-bold uppercase text-white mb-3 tracking-wide md:tracking-widest">BOOK YOUR TOUR</h2>

        <hr className="border-gray w-1/2 mx-auto mb-3" />
        <p className="mx-auto text-white text-center w-full p-2 md:w-3/5 mb-10 text-sm font-semibold leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua..
        </p>

        <form
          className="flex flex-col my-auto mx-auto gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2">
            <DropDown dropDownId="package" options={packageOptions} handleChange={handleChange} dropDownName="Select Package" />
            <DropDown dropDownId="tour-date" options={tourDates} handleChange={handleChange} dropDownName="Select Date" />
          </div>
          <Button
            btnType="submit"
            btnName="Reserve Now"
            bgColor="bg-gray text-green w-2/3 mt-4 mx-auto"
          />
        </form>

      </div>

    </div>
  );
};

export default ReserveForm;
