import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

//const apiUrl = window?.configs?.apiUrl
//  ? window.configs.apiUrl
//  : "https://96bb09cd-781e-4e9c-9f15-303d190391bc-dev.e1-eu-north-azure.choreoapis.dev/cloudautomation/backend/v1";

const apiUrl =
  "https://96bb09cd-781e-4e9c-9f15-303d190391bc-dev.e1-eu-north-azure.choreoapis.dev/cloudautomation/backend/v1";

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
