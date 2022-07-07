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
      className="max-w-[30%]
    rounded overflow-hidden shadow-lgr"
    >
      <img src={tourImage} alt="Tour" />
      <h2>{tourName}</h2>
      <p>{tourLocale}</p>
      <ul className="border-t border-dashed">
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
