// src/api/axios.js
import axios from "axios";
import { VITE_API_BASE_URL } from "../../src/config/config";

const api = axios.create({
  baseURL: VITE_API_BASE_URL,
  withCredentials: false, // change to true if using cookies/auth
});

export default api;
