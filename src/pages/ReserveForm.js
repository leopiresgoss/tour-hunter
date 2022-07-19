import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CgSpinner as CircleSpinner } from 'react-icons/cg';
import Button from '../components/Button';
import makeReservation from '../api/ReserveTour';
import DropDown from '../components/DropDown';
import Message from '../components/Message';
import { changeStatus } from '../redux/reducers/reservation';

const ReserveForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tourDetail } = useSelector((state) => state.tour);
  const { status, message } = useSelector((state) => state.reservation);

  const [showMessage, setShowMessage] = useState({
    type: null,
    message: null,
    title: null,
  });

  const [tourPackage, setTourPackage] = useState({
    tour_date_id: '',
    package: '',
  });

  const tourDates = [];
  tourDetail.tour_dates.forEach((tourDate) => {
    tourDates.push({
      id: tourDate.id,
      item: tourDate.date,
    });
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

  useEffect(() => {
    const displayMessage = () => {
      if (status === 'Success' && message === 'Booked successfully.') {
        setTimeout(() => {
          navigate(-1);
        }, 1000);

        dispatch(changeStatus({ message: null, status: null }));
      } else if (status === 'Loading') {
        setShowMessage({
          type: null,
          message: null,
          title: null,
        });
      } else {
        setShowMessage({
          type: 'alert',
          message: 'Your reservation has failed!',
          title: 'Failed',
        });
      }
    };
    displayMessage();
  }, [status]);

  const packageOptions = [
    { id: 1, item: 'Standard' },
    { id: 2, item: 'VIP' },
    { id: 3, item: 'Luxury' },
  ];

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-green overflow-hidden bg-opacity-80">

      {(status === 'Success' || message === 'Failure') && (
      <Message
        message={showMessage.message}
        type={showMessage.type}
        color="black"
        duration={5000}
        title={showMessage.title || 'Information'}
      />
      )}

      <img
        className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
        src="https://www.fanabc.com/english/wp-content/uploads/2021/08/Tourism-Danakil-Depression.jpg"
        alt="reserve-form-bg"
      />

      <div className="flex flex-col mx-auto justify-center align-middle">
        <h2 className="text-2xl mx-auto font-bold uppercase
        text-white mb-3 tracking-wide md:tracking-widest"
        >
          {
            `Book ${tourDetail.name}`
          }
        </h2>

        <hr className="border-gray w-1/2 mx-auto mb-3" />
        <p className="mx-auto text-white text-center w-full
        p-2 md:w-3/5 mb-10 text-sm font-semibold leading-6  max-h-[100px] overflow-hidden py-1"
        >
          {tourDetail.description}
        </p>

        <form
          className="flex flex-col my-auto mx-auto gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2">
            <DropDown
              dropDownId="package"
              options={packageOptions}
              handleChange={handleChange}
              dropDownName="Select Package"
            />
            <DropDown
              dropDownId="tour-date"
              options={tourDates}
              handleChange={handleChange}
              dropDownName="Select Date"
            />
          </div>
          <Button
            btnType="submit"
            btnName={(
              <div className="flex justify-center gap-2">
                {status === 'Loading'
                  ? (
                    <>
                      <CircleSpinner className="my-auto w-5 h-5 animate-spin" />
                      Reserving ...
                    </>
                  ) : 'Reserve Tour'}
              </div>
            )}
            bgColor="bg-gray text-green w-2/3 mt-4 mx-auto"
          />

        </form>

      </div>

    </div>
  );
};

export default ReserveForm;
