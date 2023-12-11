import { axiosClient } from "./axios-cilent";

export const bookApi = {
  getBooks() {
    return axiosClient.get(`/book/list`);
  },
  getBook(id: string | number) {
    return axiosClient.get(`/book/${id}`);
  },
};
