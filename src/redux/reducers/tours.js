import axios from 'axios';

const API_URL = 'https://tourhunterapi.herokuapp.com';

function getAPIdata() {
  return axios.get(API_URL).then((response) => response.data);
}

export default getAPIdata;
