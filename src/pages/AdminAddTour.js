import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../components/Calendar';
import Button from '../components/Button';
import { addTour } from '../redux/reducers/tours';

const AdminAddTour = () => {
  const token = useSelector((state) => state.token.userData.token);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: 0,
    description: '',
    images: [],
    date: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTour({ token, formData }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileSelectedHandler = (e) => {
    setFormData({ ...formData, images: [...e.target.files] });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e });
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
            <input onChange={handleChange} type="text" name="name" placeholder="Tour Name" className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <input onChange={handleChange} type="text" name="location" placeholder="Location" className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <input onChange={handleChange} type="number" name="price" placeholder="Price" className="py-2 px-5 rounded-full font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <textarea onChange={handleChange} name="description" placeholder="Description" rows="4" className="py-2 px-5 rounded-xl font-semibold bg-transparent text-white border-white border placeholder:text-white" />
            <input onInput={fileSelectedHandler} name="images" type="file" multiple="multiple" accept="image/*" />
            <Calendar handleDateChange={handleDateChange} />
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
