import { axiosClient } from "./axios-cilent";

export const adminApi = {
  getAllRequests(libraryId: number) {
    return axiosClient.get(`/borrow-request/list?libraryId=${libraryId}`);
  },
};
