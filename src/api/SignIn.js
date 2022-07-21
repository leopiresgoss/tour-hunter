import { CHANGE_USER_STATUS, GET_USER_DATA } from '../redux/reducers/token';
import { updateSignedInStatus } from '../redux/reducers/users';
import store from '../redux/store';
import host from './host';

const SignInUser = async (formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch(
    `${host}/users/sign_in`,
    {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ user: formData }),
    },
  );

  const token = [...response.headers][0][1];
  const result = await response.json();
  const userData = { role: result.role, token };
  localStorage.setItem('user', JSON.stringify(userData));
  store.dispatch(GET_USER_DATA(userData));
  store.dispatch(CHANGE_USER_STATUS(true));
  store.dispatch(updateSignedInStatus('Signed in'));
};

export default SignInUser;
