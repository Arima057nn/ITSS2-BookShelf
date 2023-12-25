"use client";
import { useEffect, useState } from "react";
import Action from "@/app/components/action";
import { requestApi } from "@/app/services/request-api";
import Borroweditem from "@/app/components/borroweditem";
import { BorrowingBookInterface } from "@/app/models/borrowed";
import withUserAuth from "@/app/components/withUserAuth";

function Borrowed() {
  const [books, setBooks] = useState<BorrowingBookInterface[]>();
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let res = await requestApi.GetBorrowingBooks(1);
    setBooks(res.data);
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <div></div>
        <Action />
      </div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <p className=" text-gray-700 text-lg font-semibold">Borrowing list</p>
      </div>
      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-base">
        <div className="w-4/12">Title</div>
        <div className="w-2/12 text-center flex justify-center flex-col">
          Library
        </div>
        <div className="w-2/12 text-center flex justify-center flex-col">
          Borrow Date
        </div>
        <div className="w-2/12 text-center flex justify-center flex-col">
          Due Date
        </div>
        <div className="w-2/12 text-center flex justify-center flex-col">
          Status
        </div>
      </div>

      <div>
        {books?.map((item: BorrowingBookInterface) => (
          <Borroweditem book={item} />
        ))}
      </div>
    </div>
  );
}

export default withUserAuth(Borrowed);
