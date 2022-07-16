import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TourCard from '../components/TourCard';
import FlashMessage from '../components/FlashMessage';
import { homepageTourAPI } from '../redux/reducers/homepageTours';
import NavButton from '../components/NavButton';

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
        <h1 className="mx-auto font-bold text-2xl text-black md:mt-[100px]">
          Our Tours
        </h1>
        <p className="mx-auto text-gray-dark">Please select one of our tours</p>
      </div>
      <div className="w-full flex flex-col gap-24 md:flex-row  md:justify-center md:items-center md:min-h-[80vh] md:gap-0">
        <div className="hidden md:block">
          <NavButton
            btnDirection="left"
            bgColor="bg-green text-white max-w-[100px] "
          />
        </div>
        {tours.map((tour) => (
          <Link key={tour.id} to={`/tour/${tour.id}`}>
            <TourCard
              tourName={tour.name}
              tourLocale={tour.location}
              tourImage={tour.image_urls[0]}
            />
          </Link>
        ))}
        <div className="hidden md:block">
          <NavButton
            btnDirection="right"
            bgColor="bg-green text-white max-w-[100px] "
          />
        </div>
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
