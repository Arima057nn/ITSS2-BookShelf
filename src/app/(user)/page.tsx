"use client";
import Bookitem from "../components/bookitem";
import Category from "../components/category";
import Search from "../components/search";
import { bookApi } from "@/app/services";
import { useEffect } from "react";
import { Books } from "../data/book";
import { BookInfo } from "../models/common";

export default function Home() {
  return (
    <div>
      <Search />
      <Category />

      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-lg">
        <div className="w-4/12">Title</div>
        <div className="w-2/12">Category</div>
        <div className="w-2/12 text-center">Status</div>
        <div className="w-3/12 text-center">Library</div>
      </div>
      {Books.map((book: BookInfo, index) => (
        <Bookitem key={index} book={book} />
      ))}
    </div>
  );
}
