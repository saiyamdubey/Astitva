// api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://astitva-backend.onrender.com',
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

export default axiosInstance;
