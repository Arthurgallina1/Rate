import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-132-213-109.us-east-2.compute.amazonaws.com:8000',
  // baseURL: 'http://localhost:8000',
  // baseURL: 'https://rate-backend.herokuapp.com',
});

export default api;
