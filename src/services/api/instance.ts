import axios from "axios";
import useAuthStore from "@/stores/useAuthStore";
import { addToast } from "@heroui/toast";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const state = useAuthStore.getState();
    const token = state.accessToken;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    addToast({
      title: "An error occurred while processing your request.",
      severity: "danger",
    });
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axiosClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;
      const state = useAuthStore.getState();

      try {
        const response = await axiosClient.post("/auth/refresh");
        const { accessToken } = response.data;

        state.setAccessToken(accessToken);

        processQueue(null, accessToken);

        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return axiosClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        state.signOut();

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
