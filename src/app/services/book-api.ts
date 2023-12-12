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
  searchBook(
    title: string | null,
    authorName: string | null,
    publishYear: string | null,
    libraryName: string | null
  ) {
    if (
      title === "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear === ""
    )
      return axiosClient.get(`/book/list`);
    else if (
      title !== "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear === ""
    )
      return axiosClient.get(`/book/search?title=${title}`);
    else if (
      title === "" &&
      libraryName !== "" &&
      authorName === "" &&
      publishYear === ""
    )
      return axiosClient.get(`/book/search?libraryname=${libraryName}`);
    else if (
      title === "" &&
      libraryName === "" &&
      authorName !== "" &&
      publishYear === ""
    )
      return axiosClient.get(`/book/search?authorName=${authorName}`);
    else if (
      title === "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear !== ""
    )
      return axiosClient.get(`/book/search?publishYear=${publishYear}`);
  },
};
