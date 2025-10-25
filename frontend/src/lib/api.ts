import { useAuthStore } from "@/store/auth";
import axios from "axios";


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://fe-test-api.nwappservice.com'
})

api.interceptors.request.use(
    (config) => {
        // const token = getCookie('auth-token');

        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // } else {
        //     // Fallback to Zustand state if no cookie (e.g., initial load)
        //     const tokenFromState = useAuthStore.getState().token;
        //     if (tokenFromState) {
        //         config.headers['Authorization'] = `Bearer ${tokenFromState}`;
        //     }
        // }
        
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)