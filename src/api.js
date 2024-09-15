import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchLatestNews = () => API.get('/news');
export const searchNews = (query) => API.get(`/search?q=${query}`);
