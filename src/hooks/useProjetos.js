import axios from 'axios';

// A URL base da tua API hospedada no Render
const api = axios.create({
  baseURL: "https://portfolio-backend-0k7x.onrender.com", 
});

export default api;
