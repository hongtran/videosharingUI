import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('token')
  },
});

export default api;
