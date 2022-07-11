import React from 'react';
import Calendar from '../components/Calendar';
import Button from '../components/Button';

const AdminAddTour = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative flex flex-col justify-center min-h-screen bg-green overflow-hidden bg-opacity-80"
    >
      <div
        className="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(https://www.fanabc.com/english/wp-content/uploads/2021/08/Tourism-Danakil-Depression.jpg)' }}
      />
      <div className="flex flex-col mx-auto justify-center align-middle">

        <h2 className="text-2xl mx-auto font-bold uppercase text-white mb-3">Add New Tour</h2>
        <hr className="border-gray w-1/2 mx-auto mb-3" />
        <form
          className="flex flex-col my-auto gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <fieldset className="flex flex-col gap-4 mt-4">
            <input type="text" name="name" placeholder="Tour Name" className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <input type="text" name="location" placeholder="Location" className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <input type="number" name="price" placeholder="Price" className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <textarea name="description" placeholder="Description" rows="4" className="py-2 px-5 rounded-xl font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <input type="file" multiple accept="image/*" />
            <Calendar />
          </fieldset>
          <Button
            btnType="submit"
            btnName="Add Tour"
            bgColor="bg-white text-green"
          />
        </form>
      </div>

    </div>
  );
};

export default AdminAddTour;
