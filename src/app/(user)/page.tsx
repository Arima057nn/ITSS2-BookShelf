"use client";
import Bookitem from "../components/bookitem";
import Category from "../components/category";
import Search from "../components/search";
import { bookApi } from "@/app/services";
import { useEffect, useState } from "react";
import Action from "../components/action";

export default function Home() {
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let res = await bookApi.getBooks();
    setBooks(res.data);
  };
  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <Search />
        <Action />
      </div>
      <Category />

      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-lg">
        <div className="w-4/12">Title</div>
        <div className="w-2/12">Category</div>
        <div className="w-2/12 text-center">Status</div>
        <div className="w-3/12 text-center">Library</div>
      </div>
      {books.map((book: any, index: number) => (
        <Bookitem key={index} book={book} />
      ))}
    </div>
  );
}
