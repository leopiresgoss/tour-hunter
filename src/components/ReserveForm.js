import React from 'react';
import FormSelect from './FormSelect';
import Button from './Button';
import TopNav from './TopNav';

const ReserveForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-green overflow-hidden bg-opacity-80">

      <img
        className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
        src="https://www.fanabc.com/english/wp-content/uploads/2021/08/Tourism-Danakil-Depression.jpg"
        alt="reserve-form-bg"
      />
      <TopNav />
      <div className="flex flex-col mx-auto justify-center align-middle">

        <h2 className="text-2xl mx-auto font-bold uppercase text-white mb-3">BOOK YOUR TOUR</h2>
        <hr className="border-gray w-1/2 mx-auto mb-3" />
        <p className="mx-auto text-white text-center w-full p-2 md:w-3/5 mb-10 text-sm font-semibold leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua..
        </p>

        <form
          className="flex flex-row my-auto gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <FormSelect />
          <Button
            btnType="submit"
            btnName="Reserve"
            bgColor="bg-white text-green"
          />
        </form>
      </div>

    </div>
  );
};

export default ReserveForm;
