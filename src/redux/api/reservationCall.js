const reserveTour = async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/greeting');
  const reservationStatus = await response.json;
  return reservationStatus;
};

export default reserveTour;
