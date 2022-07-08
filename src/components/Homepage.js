import React from 'react';
import TourCard from './TourCard';

function Homepage() {
  return (
    <section className="mx-auto w-screen">
      <div className="mx-auto w-full flex flex-col p-10">
        <h1 className="mx-auto font-bold text-2xl text-black">Our Tours</h1>
        <p className="mx-auto text-gray-dark">Please select one of our tours</p>
      </div>
      <div className="w-full flex flex-col gap-24">
        <TourCard
          tourName="Eiffel Tower"
          tourImage="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          tourLocale="Paris"
        />
        <TourCard
          tourName="Eiffel Tower"
          tourImage="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          tourLocale="Paris"
        />
      </div>
    </section>
  );
}

export default Homepage;
