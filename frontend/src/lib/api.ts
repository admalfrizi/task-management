import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const api : AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
});

api.interceptors.request.use(
  async (config) => {
    const token = (await cookies()).get("auth_token")?.value;
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);

api.interceptors.response.use(
  (response) => response,
)