import axios from "axios";

const BASE_URL = "https://callix-backend-ux9x.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true 
});
