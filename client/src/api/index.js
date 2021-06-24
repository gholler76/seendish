import axios from 'axios';

const API = axios.create({baseURL: process.env.BASE_URL});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const login = (formData) => API.post('/user/login', formData);
export const register = (formData) => API.post('/user/register', formData);

export const fetchBubbles = () => API.get('/bubbles');
export const createBubble = (newBubble) => API.post('/bubbles', newBubble);
