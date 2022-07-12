import { updateSignedInStatus } from '../redux/reducers/users';
import store from '../redux/store';

const CreateUser = async (formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  await fetch('https://tourhunterapp.herokuapp.com/users', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ user: formData }),
  })
    .then((response) => response.text())
    .then((result) => {
      if (result === '{"message":"Signed up."}') {
        store.dispatch(updateSignedInStatus('Waiting for confirmation'));
        window.location.href = 'http://localhost:3000/tours';
      } else {
        console.log(result);
      }
    })
    .catch((error) => console.log('error', error));
};

export default CreateUser;
