import host from './host';

const confirmAccountAPI = async (token) => {
  const result = await fetch(
    `${host}/users/confirmation?confirmation_token=${token}`,
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return result;
};

export default confirmAccountAPI;
