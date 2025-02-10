// api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://astitva-backend.onrender.com',
  withCredentials: true,
});

export default axiosInstance;
