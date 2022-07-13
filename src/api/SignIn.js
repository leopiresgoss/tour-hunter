import { CHANGE_USER_STATUS, GET_USER_DATA } from '../redux/reducers/token';
import store from '../redux/store';

const SignInUser = async (formData) => {
  store.dispatch(CHANGE_USER_STATUS('LOGGING'));
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch('http://127.0.0.1:3000/users/sign_in', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ user: formData }),
  });

  const token = await [...response.headers][0][1];
  const result = await response.json();
  const userData = { role: result.role, token };
  localStorage.setItem('user', JSON.stringify(userData));
  store.dispatch(GET_USER_DATA(userData));
  store.dispatch(CHANGE_USER_STATUS('LOGGED'));
};

export default SignInUser;
