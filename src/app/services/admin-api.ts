import { axiosClient } from "./axios-cilent";

export const adminApi = {
  getAllRequests() {
    return axiosClient.get(`/borrow-request/list`);
  },
};
