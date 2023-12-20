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
    libraryName: string | null,
    categoryId: string | null,
    page: string | string[] | null
  ) {
    if (
      title === "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear === "" &&
      categoryId === ""
    )
      return axiosClient.get(`/book/list?page=${page}&size=2`);
    else if (
      title !== "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear === "" &&
      categoryId === ""
    )
      return axiosClient.get(`/book/search?title=${title}&page=${page}&size=1`);
    else if (
      title === "" &&
      libraryName !== "" &&
      authorName === "" &&
      publishYear === "" &&
      categoryId === ""
    )
      return axiosClient.get(
        `/book/search?libraryName=${libraryName}&page=${page}&size=5`
      );
    else if (
      title === "" &&
      libraryName === "" &&
      authorName !== "" &&
      publishYear === "" &&
      categoryId === ""
    )
      return axiosClient.get(
        `/book/search?authorName=${authorName}&page=${page}&size=5`
      );
    else if (
      title === "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear !== "" &&
      categoryId === ""
    )
      return axiosClient.get(
        `/book/search?publishYear=${publishYear}&page=${page}&size=5`
      );
    else if (
      title === "" &&
      libraryName === "" &&
      authorName === "" &&
      publishYear === "" &&
      categoryId !== ""
    )
      return axiosClient.get(
        `/book/search?categoryId=${categoryId}&page=${page}&size=5`
      );
  },
};
