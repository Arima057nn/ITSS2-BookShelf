import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error;
  }
);

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
