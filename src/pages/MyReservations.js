import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TourCard from '../components/TourCard';
import getReservations from '../api/MyReservation';

function MyReservations() {
  const reservations = useSelector((state) => state.myReservations.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
  },
  []);

  return (
    <section className="mx-auto w-screen relative flex flex-col justify-center min-h-screen bg-green overflow-hidden bg-opacity-80">
      <img
        className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
        src="https://www.fanabc.com/english/wp-content/uploads/2021/08/Tourism-Danakil-Depression.jpg"
        alt="reserve-form-bg"
      />
      <div className="mx-auto w-full flex flex-col p-10">
        <h1 className="mx-auto font-bold text-2xl text-black pb-5">
          Your Reservations
        </h1>
        <hr className="w-1/4 mx-auto" />
      </div>
      <div className="w-full flex flex-col gap-24">
        {
          reservations.map((reservation) => (
            <TourCard
              key={reservation.reseravation_id}
              tourName={reservation.tour_name}
              tourImage={reservation.tour_images[0]}
              tourLocale={reservation.tour_location}
              tourDate={reservation.tour_date}
              tourPackage={reservation.package}

            />
          ))
        }

      </div>
    </section>
  );
}

export default MyReservations;
