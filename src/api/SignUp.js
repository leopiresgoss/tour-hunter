const CreateUser = async (formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  await fetch('https://tourhunterapp.herokuapp.com/users', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ user: formData }),
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export default CreateUser;
