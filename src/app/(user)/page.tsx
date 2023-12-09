"use client";
import Bookitem from "../components/bookitem";
import Category from "../components/category";
import Search from "../components/search";
import { bookApi } from "@/app/services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let res = await bookApi.getBooks();
    console.log("resssss: ", res.data);
  };
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
      <Bookitem />
      <Bookitem />
      <Bookitem />
      <Bookitem />
      <Bookitem />
      <Bookitem />
      <Bookitem />
    </div>
  );
}
