import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../components/Button';
import NavButton from '../components/NavButton';
import Carousel from '../components/Carousel';

const ReservationDetails = () => {
  const tour = {
    id: 3,
    name: 'Tour Title',
    price: 660.50,
    date: Date.now(),
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
      { id: 2, src: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
      { id: 3, src: 'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
    ],
    location: 'Rio de Janeiro',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis sapien pharetra molestie vulputate. Curabitur condimentum blandit dui, rhoncus semper sapien dictum vitae. Etiam in mi ultrices, commodo ligula quis, efficitur erat. Donec at est scelerisque mi pharetra placerat congue a orci. Morbi porttitor non augue elementum gravida. Vivamus tempor scelerisque dignissim. Vestibulum rutrum magna at pellentesque facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam cursus venenatis odio in suscipit. Morbi vulputate sagittis consequat.
    
    Sed at blandit ex. Sed bibendum viverra erat vel venenatis. Maecenas euismod tempor sapien vitae pulvinar. Curabitur vitae porttitor ante, eu auctor dolor. Vestibulum at justo dui. Suspendisse quis velit venenatis, ornare odio et, maximus est. Nulla facilisi. Aenean viverra felis nec turpis consequat vestibulum.`,
  };

  return (
    <section id="details" className="flex flex-col min-h-screen max-w-screen relative p-3">
      <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
        <div className="md:w-3/5 md:mx-auto">
          <Carousel images={tour.images} />
        </div>
        <div className="sidebar mt-4 md:w-[20%] md:flex-none">
          <h2 className="font-semibold text-2xl md:text-4xl text-center md:text-end mb-4">{tour.name}</h2>
          <ul>
            <li className="bg-gray">
              <p className="text-lg p-2">
                Locale:
                {' '}
                {tour.location}
              </p>
            </li>
            <li>
              <p className="text-lg p-2">
                Tour Date:
                {' '}
                {moment(tour.date).format('LL')}
              </p>
            </li>
            <li className="bg-gray">
              <p className="text-lg p-2">
                Price:
                {' $'}
                {tour.price.toFixed(2)}
              </p>
            </li>
            <li className="mt-4">
              <p className="break-spaces">
                {tour.description}
              </p>
            </li>
            <li className="mt-4 mb-12 flex justify-end">
              <Link to="/">
                <Button btnName="Reserve Tour" btnType="button" bgColor="bg-green text-white ml-auto" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/" title="Back" className="mt-4 absolute bottom-4 left-0">
        <NavButton btnDirection="left" bgColor="bg-green text-white" />
      </Link>
    </section>
  );
};

export default ReservationDetails;
