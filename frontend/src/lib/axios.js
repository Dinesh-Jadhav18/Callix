import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "https://callix-backend-ux9x.onrender.com/api" : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true 
});
