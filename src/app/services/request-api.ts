import { BorrowRequestInterface } from "../models/request";
import { axiosClient } from "./axios-cilent";
import { AxiosResponse } from "axios";

export const requestApi = {
  getRequestByUser(id: number): Promise<AxiosResponse<BorrowRequestInterface>> {
    return axiosClient.get(`/borrow-request/list/${id}`);
  },
};
