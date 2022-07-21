import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TourCard from '../components/TourCard';
import getReservations from '../api/MyReservation';

function MyReservations() {
  const reservations = useSelector(
    (state) => state.myReservations.reservations,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
  }, []);

  return (
    <section className="w-screen relative flex flex-col justify-center min-h-screen bg-opacity-80 md:w-full md:pb-1 mb:overflow-scroll">
      <div className="mx-auto w-full flex flex-col p-10">
        <h1 className="mx-auto font-bold text-2xl text-black pb-5">
          Your Reservations
        </h1>
        <hr className="w-1/4 mx-auto" />
      </div>
      <div className="w-full flex flex-wrap gap-5 justify-center md:h-[500px] md:w-full">
        {reservations.map((reservation) => (
          <TourCard
            key={reservation.reseravation_id}
            tourName={reservation.tour_name}
            tourImage={reservation.tour_images[0]}
            tourLocale={reservation.tour_location}
            tourDate={reservation.tour_date}
            tourPackage={reservation.package}
          />
        ))}
      </div>
    </section>
  );
}

export default MyReservations;
