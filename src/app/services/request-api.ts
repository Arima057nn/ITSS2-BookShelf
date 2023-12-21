import { BorrowRequestInterface } from "../models/request";
import { axiosClient } from "./axios-cilent";
import { AxiosResponse } from "axios";

export const requestApi = {
  getRequestByUser(id: number): Promise<AxiosResponse<BorrowRequestInterface>> {
    return axiosClient.get(`/borrow-request/list/${id}`);
  },
  AddBookToBorrow(
    id: number,
    bookId: number | string,
    libraryId: number | string
  ) {
    return axiosClient.post(
      `/borrow-book-instance/create?userId=${id}&bookId=${bookId}&libraryId=${libraryId}`
    );
  },
  getBookFromRequest(id: number, borrowId: number) {
    return axiosClient.get(
      `/borrow-book-instance/list?borrow_request_id=${borrowId}&user_id=${id}`
    );
  },

  SentBorrowRequest(
    borrowId: number,
    borrowDate: string,
    borrowDueDate: string
  ) {
    return axiosClient.post(
      `/borrow-request/sent/${borrowId}?borrow_date=${borrowDate}&request_due_date=${borrowDueDate}`
    );
  },

  GetBorrowingBooks(id: number) {
    return axiosClient.get(`/borrow-book-instance/list/${id}`);
  },
};
