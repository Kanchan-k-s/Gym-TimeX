import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: `http://localhost:3000/`,
});
axios.defaults.headers.common['Time-Zone'] = 'Asia/Kolkata';
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['cache-control'] = 'no-cache';
  return config;
});

export default api;
