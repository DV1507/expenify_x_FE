import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Backend API URL from .env
  withCredentials: true, // Allows sending cookies with requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
