const getAPIdata = async () => {
  await fetch('https://tourhunterapi.herokuapp.com/tours')
    .then((response) => response.json())
    .then((data) => data);
};

export default getAPIdata;
