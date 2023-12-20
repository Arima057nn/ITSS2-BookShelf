"use client";
import Bookitem from "../components/bookitem";
import Category from "../components/category";
import Search from "../components/search";
import { bookApi } from "@/app/services";
import { use, useEffect, useState } from "react";
import Action from "../components/action";
import { BooksInterface } from "../models/books";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const [books, setBooks] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const router = useRouter();

  const handlePageChange = (newPage) => {
    // Thay đổi trang và cập nhật URL
    setCurrentPage(newPage);
    console.log("page current:", newPage);

    if (searchParams.title !== undefined) {
      if (searchParams.page === undefined) {
        router.push(`/?title=${searchParams.title}`);
      } else {
        router.push(`/?title=${searchParams.title}&page=${searchParams.page}`);
      }
    } else if (searchParams.author !== undefined) {
      if (searchParams.page === undefined) {
        router.push(`/?author=${searchParams.author}`);
      } else {
        router.push(
          `/?author=${searchParams.author}&page=${searchParams.page}`
        );
      }
    } else if (searchParams.publishingTime !== undefined) {
      if (searchParams.page === undefined) {
        router.push(`/?publishingTime=${searchParams.publishingTime}`);
      } else {
        router.push(
          `/?publishingTime=${searchParams.publishingTime}&page=${searchParams.page}`
        );
      }
    } else if (searchParams.library !== undefined) {
      if (searchParams.page === undefined) {
        router.push(`/?library=${searchParams.library}`);
      } else {
        router.push(
          `/?library=${searchParams.library}&page=${searchParams.page}`
        );
      }
    } else if (searchParams.categoryId !== undefined) {
      if (searchParams.page === undefined) {
        router.push(`/?categoryId=${searchParams.categoryId}`);
      } else {
        router.push(
          `/?categoryId=${searchParams.categoryId}&page=${searchParams.page}`
        );
      }
    } else {
      router.push(`/?page=${newPage}`);
    }
  };
  useEffect(() => {
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
    console.log("search", search);
    let res;
    if (search === undefined) {
      search = "";
      if (searchParams.page === undefined) {
        res = await bookApi.searchBook(search, "", "", "", "", "1");
      } else {
        res = await bookApi.searchBook(
          search,
          "",
          "",
          "",
          "",
          searchParams.page
        );
      }
    } else {
      if (searchParams.title !== undefined) {
        if (searchParams.page === undefined) {
          res = await bookApi.searchBook(search, "", "", "", "", "1");
        } else {
          res = await bookApi.searchBook(
            search,
            "",
            "",
            "",
            "",
            searchParams.page
          );
        }
      }
      if (searchParams.author !== undefined) {
        if (searchParams.page === undefined) {
          res = await bookApi.searchBook("", search, "", "", "", "1");
        } else {
          res = await bookApi.searchBook(
            "",
            search,
            "",
            "",
            "",
            searchParams.page
          );
        }
      }
      if (searchParams.publishingTime !== undefined) {
        if (searchParams.page === undefined) {
          res = await bookApi.searchBook("", "", search, "", "", "1");
        } else {
          res = await bookApi.searchBook(
            "",
            "",
            search,
            "",
            "",
            searchParams.page
          );
        }
      }
      if (searchParams.library !== undefined) {
        if (searchParams.page === undefined) {
          res = await bookApi.searchBook("", "", "", search, "", "1");
        } else {
          res = await bookApi.searchBook(
            "",
            "",
            "",
            search,
            "",
            searchParams.page
          );
        }
      }
      if (searchParams.categoryId !== undefined) {
        if (searchParams.page === undefined) {
          res = await bookApi.searchBook("", "", "", "", search, "1");
        } else {
          res = await bookApi.searchBook(
            "",
            "",
            "",
            "",
            search,
            searchParams.page
          );
        }
      }
    }
    if (res !== undefined) {
      setBooks(res.data?.content);
      setTotalPages(res.data?.totalPages);
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
        <Bookitem book={book} />
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
