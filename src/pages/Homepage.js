import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TourCard from '../components/TourCard';
import FlashMessage from '../components/FlashMessage';
import { homepageTourAPI } from '../redux/reducers/homepageTours';

function Homepage() {
  const signedIn = useSelector((state) => state.signedIn);
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.home.tours);
  useEffect(() => {
    dispatch(homepageTourAPI());
  }, []);
  return (
    <section className="mx-auto w-screen">
      <div className="mx-auto w-full flex flex-col p-10">
        <h1 className="mx-auto font-bold text-2xl text-black">Our Tours</h1>
        <p className="mx-auto text-gray-dark">Please select one of our tours</p>
      </div>
      <div className="w-full flex flex-col gap-24">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            tourName={tour.name}
            tourLocale={tour.localtion}
            tourImage={tour.image_urls[0]}
          />
        ))}
      </div>
      {signedIn === 'Waiting for confirmation' && (
        <FlashMessage
          title="Waiting for confirmation"
          className="text-orange"
          message="You will receive an email shortly containing an activation link. If you didn't receive the email please check your spam folder."
        />
      )}
    </section>
  );
}

export default Homepage;
