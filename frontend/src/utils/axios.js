import axios from 'axios';

const API = axios.create({
  baseURL: "https://hivemind-backend-g67z.onrender.com", // Adjust if deploying
});

// Add token to each request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
