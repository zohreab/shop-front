import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    // If a token exists, set it in the Authorization header
    axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
  } else {
    // If no token, remove the Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};
