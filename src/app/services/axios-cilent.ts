import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://reqres.in/api/users?page=2",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
