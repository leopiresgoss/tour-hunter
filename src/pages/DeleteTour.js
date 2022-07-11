import React from 'react';
import Container from '../components/Container';

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
    <Container>
      <h1 className="text-center pt-12 text-2xl font-bold">Delete a Tour</h1>
      <div className="flex flex-col py-2 px-4">
        {tours.map((tour) => (
          <form
            key={tour.id}
            onSubmit={deleteTour}
            className="grid grid-cols-12 p-3 mb-2 border border-gray rounded items-center"
          >
            <span className="col-span-2">{tour.id}</span>
            <p className="col-span-8">{tour.title}</p>
            <button
              type="submit"
              className="p-2 bg-red text-white text-sm rounded col-span-2 md:col-span-1"
            >
              Delete
            </button>
          </form>
        ))}
      </div>
    </Container>
  );
};

export default DeleteTour;
