const deleteTourAPI = async (token, id) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', token);
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow',
  };

  return fetch(
    `https://tourhunterapi.herokuapp.com/tours/${id}`,
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => error);
};

export default deleteTourAPI;
