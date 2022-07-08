import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images }) => (
  <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      {images.map((image, index) => {
        if (index === 0) {
          return (
            <button
              key={image.id}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className="active"
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            />
          );
        }
        return (
          <button
            key={image.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            aria-label={`Slide ${index + 1}`}
          />
        );
      })}
    </div>
    <div className="carousel-inner relative w-full overflow-hidden">
      {images.map((image, index) => (
        <div key={image.id} className={`carousel-item ${index === 0 && 'active'} relative float-left w-full`}>
          <img
            src={image.src}
            className="block w-full"
            alt=""
          />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default Carousel;
