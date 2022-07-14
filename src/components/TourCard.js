import React from 'react';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from 'react-icons/ti';

const TourCard = (props) => {
  props.tours.map((tours) => (
    <div
      className="mx-w-[90%] md:mx-w-[30%]
  rounded overflow-hidden shadow-lgr"
      key={tours.id}
    >
      <img
        src={tours.image}
        alt="Tour"
        className="w-3/4 pb-5 mx-auto rounded-3xl"
      />
      <h2 className="text-center pb-5 text-black font-l font-bold">
        {tours.name}
      </h2>
      <hr className="w-1/4 mx-auto" />
      <p className=" pt-5 text-center font-medium text-gray-dark">
        {tours.location}
      </p>
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
  ));
};

export default TourCard;
