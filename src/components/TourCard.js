import React from 'react';
import PropTypes from 'prop-types';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from 'react-icons/ti';

const TourCard = (props) => {
  const { tourName, tourLocale, tourImage } = props;
  return (
    <div
      className="mx-w-[90%] md:mx-w-[30%]
    rounded overflow-hidden shadow-lgr"
    >
      <img
        src={tourImage}
        alt="Tour"
        className="w-3/4 pb-5 mx-auto rounded-3xl"
      />
      <h2 className="text-center pb-5 text-black font-l font-bold">
        {tourName}
      </h2>
      <hr className="w-1/4 mx-auto" />
      <p className=" pt-5 text-center font-medium text-gray-dark">
        {tourLocale}
      </p>
      <ul className="flex flex-row justify-center gap-4 pt-5">
        <li>
          <TiSocialFacebook />
        </li>
        <li>
          <TiSocialTwitter />
        </li>
        <li>
          <TiSocialInstagram />
        </li>
      </ul>
    </div>
  );
};

export default TourCard;

TourCard.propTypes = {
  tourName: PropTypes.string.isRequired,
  tourLocale: PropTypes.string.isRequired,
  tourImage: PropTypes.string.isRequired,
};
