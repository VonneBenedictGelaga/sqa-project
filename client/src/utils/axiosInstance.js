import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_API,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url.includes("refresh")
    ) {
      return Promise.reject(error);
    } else if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await api.get("refresh");
      } catch (error) {
        console.log("error", error);
      }
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
