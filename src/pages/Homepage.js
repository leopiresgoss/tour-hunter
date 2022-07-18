import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import TourCard from '../components/TourCard';
import FlashMessage from '../components/FlashMessage';
import Message from '../components/Message';

import {
  homepageTourAPI,
  updateRightTours,
  updateLeftTours,
} from '../redux/reducers/homepageTours';

function Homepage() {
  const signedIn = useSelector((state) => state.signedIn);
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const tours = useSelector((state) => state.home.tours.filter(
    (t) => t.visible === true || window.screen.width < 500,
  ));
  useEffect(() => {
    dispatch(homepageTourAPI());
  }, []);
  return (
    <section className="mx-auto w-screen">
      <Message
        message="Sample Message"
        type="success"
        color="black"
        duration={10000}
        title="Success"
      />
      <div className="mx-auto w-full flex flex-col p-10 mt-10 md:mt-0">
        <h1 className="mx-auto font-bold text-2xl text-black md:mt-[100px]">
          Our Tours
        </h1>
        <p className="mx-auto text-gray-dark">Please select one of our tours</p>
      </div>
      <div className="w-full flex flex-col gap-24 md:flex-row  md:justify-center md:items-center md:min-h-[80vh] md:gap-0">
        <div className="hidden md:block">
          <button
            onClick={() => dispatch(updateLeftTours())}
            type="button"
            className="bg-green text-white max-w-[100px] py-3 pl-8 pr-3 rounded-br-full rounded-tr-full font-semibold"
          >
            <BiLeftArrow />
          </button>
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
          <button
            onClick={() => dispatch(updateRightTours())}
            type="button"
            className="bg-green text-white max-w-[100px] py-3 pl-3 pr-8 rounded-bl-full rounded-tl-full  font-semibold mx-5"
          >
            <BiRightArrow />
          </button>
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
