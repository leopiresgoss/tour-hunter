import host from './host';

const confirmAccountAPI = async (token) => {
  console.log(host);
  const result = await fetch(`${host}/users/confirmation?confirmation_token=${token}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log('error', error));
  return result;
};

export default confirmAccountAPI;
