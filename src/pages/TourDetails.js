import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import NavButton from '../components/NavButton';
import Carousel from '../components/Carousel';
import { setTourDetail, setTourLoading } from '../redux/reducers/tour';
import Spinner from '../components/Spinner';

const TourDetails = () => {
  const tour = useSelector((state) => state.tour.tourDetail);
  const loading = useSelector((state) => state.tour.loading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://tourhunterapi.herokuapp.com/tours/${id}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setTourDetail(result));
        dispatch(setTourLoading(false));
      })
      .catch((error) => error);
  }, []);
  return (
    <section
      id="details"
      className="flex flex-col min-h-screen max-w-screen relative p-3 mt-12"
    >
      {!loading
        ? (
          <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
            <div className="md:w-3/5 md:mx-auto">
              <Carousel images={tour.image_urls.map((el, i) => ({ id: i, src: el }))} />
            </div>
            <div className="sidebar mt-4 md:w-[20%] md:flex-none">
              <h2 className="font-semibold text-2xl md:text-4xl text-center md:text-end mb-4">
                {tour.name}
              </h2>
              <ul>
                <li className="bg-gray">
                  <p className="text-lg p-2">
                    Location:
                    {tour.location}
                  </p>
                </li>
                <li>
                  <p className="text-lg p-2">
                    Tour Date(s):

                    {tour.tour_dates.map((el) => <span className="bg-[#dfdfdf6e] text-[#708090] inline-block px-3 m-1 rounded-lg" key={el.id}>{moment(el.date).format('LL')}</span>)}
                  </p>
                </li>
                <li className="bg-gray">
                  <p className="text-lg p-2">
                    Price:
                    {' $'}
                    {tour.price.toFixed(2)}
                  </p>
                </li>
                <li className="mt-4">
                  <p className="break-spaces">{tour.description}</p>
                </li>
                <li className="mt-4 mb-12 flex justify-end">
                  <Link to="/reservation/new">
                    <Button
                      btnName="Reserve Tour"
                      btnType="button"
                      bgColor="bg-green text-white ml-auto"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : <Spinner />}
      <Link to="/" title="Back" className="mt-4 absolute bottom-4 left-0">
        <NavButton btnDirection="left" bgColor="bg-green text-white" />
      </Link>
    </section>
  );
};

export default TourDetails;
