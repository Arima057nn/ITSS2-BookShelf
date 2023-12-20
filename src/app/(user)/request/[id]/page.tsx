"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { bookApi } from "@/app/services";
import { BookDetailInterface } from "@/app/models/common";
import Action from "@/app/components/action";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [book, setBook] = useState<BookDetailInterface>();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    let res = await bookApi.getBook(id);
    console.log(res.data);

    setBook(res.data);
  };
  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <div></div>
        <Action />
      </div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <p className=" text-gray-700 text-lg font-semibold">
          Request Book List
        </p>
        <p>hehe</p>
      </div>
      <div className="flex w-10/12 px-8 pt-8 pb-4 font-medium text-base">
        <div className="w-5/12">Title</div>
        <div className="w-4/12 text-center">Category</div>
        <div className="w-2/12 text-center"></div>
      </div>
    </div>
  );
}
