import host from './host';

const CreateUser = async (formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch(`${host}/users`, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ user: formData }),
  })
    .then((response) => response.text())
    .then((result) => {
      if (result === '{"message":"Signed up."}') {
        return result;
      }
      return null;
    })
    .catch((error) => error); //eslint-disable-line
  return response;
};

export default CreateUser;
