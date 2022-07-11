import React from 'react';
import Button from '../components/Button';

const DeleteTour = () => {
  const tours = [
    {
      id: 1,
      title: 'Tour 1',
    },
    {
      id: 2,
      title: 'Tour 1',
    },
    {
      id: 3,
      title: 'Tour 1',
    },
    {
      id: 4,
      title: 'Tour 1',
    },
    {
      id: 5,
      title: 'Tour 1',
    },
  ];

  const deleteTour = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h1>Delete a Tour</h1>
      <div>
        {tours.map((tour) => (
          <form key={tour.id} onSubmit={deleteTour}>
            <span>{tour.id}</span>
            <p>{tour.title}</p>
            <Button btnName="Delete" btnType="submit" bgColor="bg-red text-white" />
          </form>
        ))}
      </div>
    </section>
  );
};

export default DeleteTour;
