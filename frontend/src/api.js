import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = window?.configs?.apiUrl
  ? window.configs.apiUrl
  : "/choreo-apis/backend-3567783701:8000";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
