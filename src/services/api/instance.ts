import axios from "axios";
import Cookies from "js-cookie";
import { addToast } from "@heroui/toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = Cookies.get("refresh_token");

  if (access_token) {
    config["headers"].Authorization = `Bearer ${access_token}`;
  } else if (refresh_token && !access_token) {
    // If there's a refresh token but no access token, remove the refresh token
    return config;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    error
      ? addToast({
          title: "Error",
          description:
            error.response?.data?.message || "An unexpected error occurred.",
          severity: "warning",
        })
      : addToast({
          title: "Error",
          description: "An unexpected error occurred.",
          severity: "danger",
        });

    return Promise.reject(error);
  }
);

export default api;
