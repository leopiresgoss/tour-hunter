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
    <div className="w-[90%] md:max-w-xs rounded overflow-hidden mx-auto shadow-lg
     shadow-gray-dark md:pb-3 md:h-full pb-10"
    >
      <img src={tourImage} alt="Tour" className="w-100 h-[50%] pb-5 mx-auto " />
      <h2 className="text-center pb-5 text-black font-l font-bold">
        {tourName}
      </h2>
      <hr className="w-1/4 mx-auto" />
      <div className="flex flex-col flex-wrap text-center gap-3 pt-5">
        <p className="font-medium text-gray-dark">{`Location: ${tourLocale}`}</p>

        <p className="font-medium text-black">{tourDate}</p>
        <p className="font-medium text-black">{tourPackage}</p>
      </div>

      <ul className="flex flex-row justify-center gap-4 pt-5">
        <li className="border-solid border-2 rounded-full border-gray-dark hover:border-green">
          <TiSocialFacebook className="fill-gray-dark hover:fill-green" />
        </li>
        <li className="border-solid border-2 rounded-full border-gray-dark hover:border-green">
          <TiSocialTwitter className="fill-gray-dark hover:fill-green" />
        </li>
        <li className="border-solid border-2 rounded-full border-gray-dark hover:border-green">
          <TiSocialInstagram className="fill-gray-dark hover:fill-green" />
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
