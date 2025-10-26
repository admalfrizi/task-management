import axios, { AxiosInstance } from "axios";

export const api : AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});