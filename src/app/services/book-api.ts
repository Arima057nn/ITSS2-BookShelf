import { BookDetailInterface } from "../models/common";
import { axiosClient } from "./axios-cilent";
import { AxiosResponse } from "axios";

export const bookApi = {
  getBooks() {
    return axiosClient.get(`/book/list`);
  },
  getBook(id: number): Promise<AxiosResponse<BookDetailInterface>> {
    return axiosClient.get(`/book/${id}`);
  },
};
