import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.178.135:8000'
    baseURL: 'https://rate-backend.herokuapp.com/'
})

export default api;