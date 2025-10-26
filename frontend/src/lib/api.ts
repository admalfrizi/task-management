import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export const api : AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth_token");
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);

api.interceptors.response.use(
  (response) => response,
)