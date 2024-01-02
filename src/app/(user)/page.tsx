"use client";
import Bookitem from "../components/bookitem";
import Category from "../components/category";
import Search from "../components/search";
import { bookApi } from "@/app/services";
import { useEffect, useState } from "react";
import Action from "../components/action";
import { BooksInterface } from "../models/books";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | null | undefined;
  };
}) {
  const [books, setBooks] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const router = useRouter();

  const updateURL = (params: any) => {
    const queryParams = new URLSearchParams(params).toString();
    router.push(`/?${queryParams}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const newSearchParams = { ...searchParams, page: newPage.toString() };
    updateURL(newSearchParams);
  };
  useEffect(() => {
    console.log("searchParams inside useEffect:", searchParams);
    if (searchParams.title !== undefined) getBooks(searchParams.title);
    else if (searchParams.author !== undefined) getBooks(searchParams.author);
    else if (searchParams.publishingTime !== undefined)
      getBooks(searchParams.publishingTime);
    else if (searchParams.library !== undefined) getBooks(searchParams.library);
    else if (searchParams.categoryId !== undefined)
      getBooks(searchParams.categoryId);
    else {
      getBooks(searchParams.title);
    }
  }, [searchParams]);

  const getBooks = async (search: any) => {
    console.log("title", searchParams);
    try {
      const res = await bookApi.searchBook(
        searchParams.title || "",
        searchParams.author || "",
        searchParams.publishingTime || "",
        searchParams.library || "",
        searchParams.categoryId || "",
        searchParams.page || "1"
      );

      if (res?.data) {
        setBooks(res.data.content);
        setTotalPages(res.data.totalPages);
      }
    } catch (error) {
      console.error("Lỗi khi tải sách:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <Search />
        <Action />
      </div>
      <Category />

      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-base">
        <div className="w-5/12">Title</div>
        <div className="w-3/12 text-center">Status</div>
        <div className="w-3/12">Category</div>
      </div>
      {books?.map((book: BooksInterface) => (
        <Bookitem key={book.book.id} book={book} />
      ))}
      <div className="flex justify-center m-4">
        <Pagination
          count={totalPages}
          onChange={(event, page) => handlePageChange(page)}
          color="primary"
        />
      </div>
    </div>
  );
}
