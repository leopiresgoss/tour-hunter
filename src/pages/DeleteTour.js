import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import { fetchTours, deleteTour } from '../redux/reducers/tours';

const DeleteTour = () => {
  const token = useSelector((state) => state.token.userData.token);
  const tours = useSelector((state) => state.tours.package);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    const id = Number(e.target.getAttribute('data-id'));
    dispatch(deleteTour({ token, id }));
  };

  return (
    <Container>
      <h1 className="text-center pt-12 text-2xl font-bold">Delete a Tour</h1>
      {tours
        && tours.map((tour, index) => (
          <form
            key={tour.id}
            onSubmit={handleDelete}
            data-id={tour.id}
            className="flex flex-col py-2 px-4"
          >
            <div className="grid grid-cols-12 p-3 mb-2 border border-gray rounded items-center">
              <span className="col-span-2">{index + 1}</span>
              <p className="col-span-8">{tour.name}</p>
              {tour.available && (
                <button
                  type="submit"
                  className="p-2 bg-red text-white text-sm rounded col-span-2 md:col-span-1"
                >
                  Delete
                </button>
              )}
              {!tour.available && (
                <div className="flex space-x-2 justify-center">
                  <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red text-white rounded-full">
                    Removed
                  </span>
                </div>
              )}
            </div>
          </form>
        ))}
    </Container>
  );
};

export default DeleteTour;
