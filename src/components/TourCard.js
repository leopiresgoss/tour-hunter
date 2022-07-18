import React from 'react';
import PropTypes from 'prop-types';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from 'react-icons/ti';

const TourCard = (props) => {
  const {
    tourName, tourLocale, tourImage, tourPackage, tourDate,
  } = props;
  return (
    <div
      className=" md:max-w-xs
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
      <div className="flex flex-col flex-wrap text-center gap-3 pt-5">
        <p className="font-medium text-white">
          {`Location: ${tourLocale}`}
        </p>

        <p className="font-medium text-white">
          {`Tour Date: ${tourDate}`}
        </p>
        <p className="font-medium text-white">
          {`Tour Package: ${tourPackage}`}
        </p>
      </div>

      <ul className="flex flex-row justify-center gap-4 pt-5">
        <li className="border-solid border-2 rounded-full border-gray">
          <TiSocialFacebook className="fill-gray" />
        </li>
        <li className="border-solid border-2 rounded-full border-gray">
          <TiSocialTwitter className="fill-gray" />
        </li>
        <li className="border-solid border-2 rounded-full border-gray">
          <TiSocialInstagram className="fill-gray" />
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
  tourDate: PropTypes.string.isRequired,
  tourPackage: PropTypes.string.isRequired,
};
