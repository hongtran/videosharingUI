import axios from 'axios';

const api = axios.create({
  baseURL: 'https://videosharing.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('token')
  },
});

export default api;
