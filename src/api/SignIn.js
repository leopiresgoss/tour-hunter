const SignInUser = async (formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  await fetch('https://tourhunterapp.herokuapp.com/users/sign_in', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ user: formData }),
  })
    .then((response) => response).then(
      (result) => {
        console.log(result.headers.Authorization);
      },
    );
};

export default SignInUser;
