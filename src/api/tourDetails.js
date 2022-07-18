const getTourDetails = async (id) => {
  const result = await fetch(`https://tourhunterapi.herokuapp.com/tours/${id}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log('error', error));
  return result;
};

export default getTourDetails;
