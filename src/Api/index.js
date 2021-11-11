import axios from 'axios';

const url = 'https://clubs-iiitm-server.herokuapp.com';

const API = axios.create({ baseURL: url });

export const getClubs = () => API.get('/club');