import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);
