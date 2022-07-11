import React from 'react';
import Button from '../components/Button';

const DeleteTour = () => (
  <section>
    <h1>Delete a Tour</h1>
    <div>
      <span>1</span>
      <p>title</p>
      <Button btnName="Delete" btnType="submit" bgColor="bg-red text-white" />
    </div>
  </section>
);

export default DeleteTour;
