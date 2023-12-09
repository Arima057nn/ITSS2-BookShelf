import { axiosClient } from "./axios-cilent";

export const bookApi = {
  getBooks() {
    return axiosClient.get(`/`);
  },
  getBook(id: string | number) {
    return axiosClient.get(`/book/${id}`);
  },
};
