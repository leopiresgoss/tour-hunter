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
    <div className="md:max-w-xs rounded overflow-hidden mx-2 shadow-lg shadow-gray-dark md:pb-3  md:h-full">
      <img src={tourImage} alt="Tour" className="w-100 pb-5 mx-auto" />
      <h2 className="text-center pb-5 text-black font-l font-bold">
        {tourName}
      </h2>
      <hr className="w-1/4 mx-auto" />
      <div className="flex flex-col flex-wrap text-center gap-3 pt-5">
        <p className="font-medium text-black">{`Location: ${tourLocale}`}</p>

        <p className="font-medium text-black">{tourDate}</p>
        <p className="font-medium text-black">{tourPackage}</p>
      </div>

      <ul className="flex flex-row justify-center gap-4 pt-5">
        <li className="border-solid border-2 rounded-full border-gray-dark">
          <TiSocialFacebook className="fill-gray-dark" />
        </li>
        <li className="border-solid border-2 rounded-full border-gray-dark">
          <TiSocialTwitter className="fill-gray-dark" />
        </li>
        <li className="border-solid border-2 rounded-full border-gray-dark">
          <TiSocialInstagram className="fill-gray-dark" />
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
  tourDate: PropTypes.string,
  tourPackage: PropTypes.string,
};

TourCard.defaultProps = {
  tourPackage: '',
  tourDate: '',
};
