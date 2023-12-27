"use client";

import Bookitem from "@/app/components/bookitem";
import withAdminAuth from "@/app/components/withAdminAuth";
import { BooksInterface } from "@/app/models/books";
import { bookApi } from "@/app/services";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Homepage() {
  const [books, setBooks] = useState<any>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("title") !== null) getBooks(searchParams.get("title"));
    else if (searchParams.get("author") !== null)
      getBooks(searchParams.get("author"));
    else if (searchParams.get("publishingTime") !== null)
      getBooks(searchParams.get("publishingTime"));
    else if (searchParams.get("library") !== null)
      getBooks(searchParams.get("library"));
    else if (searchParams.get("categoryId") !== null)
      getBooks(searchParams.get("categoryId"));
    else {
      getBooks(searchParams.get("title"));
    }
  }, [searchParams]);

  const getBooks = async (search: any) => {
    console.log("search", search);
    let res;
    if (search === null) {
      search = "";
      res = await bookApi.searchBook(search, "", "", "", "");
    } else {
      if (searchParams.get("title") !== null) {
        res = await bookApi.searchBook(search, "", "", "", "");
      }
      if (searchParams.get("author") !== null) {
        res = await bookApi.searchBook("", search, "", "", "");
      }
      if (searchParams.get("publishingTime") !== null) {
        res = await bookApi.searchBook("", "", search, "", "");
      }
      if (searchParams.get("library") !== null) {
        res = await bookApi.searchBook("", "", "", search, "");
      }
      if (searchParams.get("categoryId") !== null) {
        res = await bookApi.searchBook("", "", "", "", search);
      }
    }
    if (res !== undefined) setBooks(res.data?.content);
  };

  return (
    <div>
      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-base">
        <div className="w-5/12">Title</div>
        <div className="w-3/12 text-center">Status</div>
        <div className="w-3/12">Category</div>
      </div>
      {books?.map((book: BooksInterface) => (
        <Bookitem key={book.book.id} book={book} />
      ))}
    </div>
  );
}
export default withAdminAuth(Homepage);
