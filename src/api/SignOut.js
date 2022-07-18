const signOutUser = (user) => {
  fetch('http://127.0.0.1:3000/users/sign_out', {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: user.token,
    },
  }).then((response) => {
    if (response.status === 200) {
      localStorage.removeItem('user');
    }
  }).catch((error) => console.log('error', error)); //eslint-disable-line
};

export default signOutUser;
