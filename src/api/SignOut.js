const signOutUser = (user) => {
  fetch('https://tourhunterapi.herokuapp.com/users/sign_out', {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: user.token,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem('user');
      }
    })
    .catch((error) => error); //eslint-disable-line
};

export default signOutUser;
