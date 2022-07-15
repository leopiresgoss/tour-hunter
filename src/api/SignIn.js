import { CHANGE_USER_STATUS, GET_USER_DATA } from '../redux/reducers/token';
import store from '../redux/store';

const SignInUser = async (formData) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch('https://tourhunterapi.herokuapp.com/users/sign_in', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ user: formData }),
  });

  const token = await [...response.headers][0][1];
  const result = await response.json();
  const userData = { role: result.role, token };
  localStorage.setItem('user', JSON.stringify(userData));
  store.dispatch(GET_USER_DATA(userData));
  store.dispatch(CHANGE_USER_STATUS(true));
};

export default SignInUser;
