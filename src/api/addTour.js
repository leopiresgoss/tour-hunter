const addTourAPI = async (token, formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', token);

  const formdata = new FormData();

  formdata.append('name', formData.name);
  formdata.append('location', formData.location);
  formdata.append('description', formData.description);
  formdata.append('price', formData.price);
  formData.images.forEach((el, i) => {
    formdata.append('images[]', formData.images[i], el);
  });

  formData.date.forEach((el, i) => {
    formdata.append(`tour_dates_attributes[${i}][date]`, el);
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return fetch(
    'https://tourhunterapi.herokuapp.com/tours',
    requestOptions,
  ).then((response) => response.text());
};

export default addTourAPI;
