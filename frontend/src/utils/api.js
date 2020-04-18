import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://rate-backend.herokuapp.com',
});

export default api;
