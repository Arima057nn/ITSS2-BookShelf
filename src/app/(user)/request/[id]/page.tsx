"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { requestApi } from "@/app/services";
import { BookDetailInterface } from "@/app/models/common";
import Action from "@/app/components/action";
import { BorrowBookInterface } from "@/app/models/request";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const [books, setBooks] = useState<any>();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let res = await requestApi.getBookFromRequest(1, id);
    setBooks(res.data);
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
      </div>
      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-base">
        <div className="w-5/12">Title</div>
        <div className="w-4/12 text-center">Category</div>
        <div className="w-2/12 text-center"></div>
      </div>
      {books?.map((item: BorrowBookInterface) => (
        <div className="px-8 w-full text-gray-700 mb-4">
          <div className=" flex w-full bg-white rounded-lg shadow-md">
            <div className="w-5/12 flex p-4">
              <Image
                src={item.bookInfo.image}
                width={56}
                height={56}
                alt="Image of the author"
              />
              <div className="ml-8 flex flex-col justify-center">
                <p className="text-lg">{item.bookInfo.title}</p>
                <div className="flex flex-col justify-around mt-2">
                  <p className="text-sm">{item.bookInfo.pushlisher}</p>
                </div>
              </div>
            </div>
            <div className="w-4/12 flex justify-center flex-col items-center">
              <p className="text-base">{item.bookInfo.categoryName}</p>
              {item.parentCategoryName !== null && (
                <p className="text-base mt-2">{item.parentCategoryName}</p>
              )}
            </div>
            <div className="w-2/12 text-center"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
