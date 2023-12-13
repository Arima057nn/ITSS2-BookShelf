"use client";

import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useEffect, useState } from "react";
import { bookApi } from "@/app/services";
import { BookDetailInterface } from "@/app/models/common";

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
    <div className="flex p-8 ">
      <div className="flex flex-col">
        <div className="max-h-fit px-4 py-8  rounded-lg bg-white">
          <Image
            src={book?.book.cover_image_url}
            width={268}
            height={268}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex ml-14">
          <div className="w-5/12 h-10 flex flex-col text-gray-600">
            <p className="text-3xl">{book?.book.title}</p>
            <p className="text-base">
              By{" "}
              <span className="underline decoration-solid">
                {book?.authors[0].name}
              </span>
              , {book?.book.publish_year}
            </p>
            <p className="text-xs text-gray-400 mb-8">{book?.book.publisher}</p>
            <p className="text-sm text-gray-700 font-semibold">Status</p>
            <div>
              <div
                className={`text-base w-20 text-center my-2 rounded text-gray-200 ${
                  book?.book.quantity !== 0 ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {book?.book.quantity}
              </div>
              {book?.book.quantity !== 0 && (
                <div>
                  <div className="flex items-center">
                    <div className="text-orange-500">
                      <FmdGoodIcon />
                    </div>
                    <p className="text-base">{book?.libraryDto.location}</p>
                  </div>
                  <p className="text-base font-bold my-4">
                    {book?.libraryDto.name}
                  </p>
                </div>
              )}
            </div>
            <button className="rounded px-2 py-3 w-52 text-lg font-semibold text-gray-100 bg-[#F27851] hover:bg-orange-600">
              Add to request list
            </button>
          </div>
          <div className="w-5/12 bg-white rounded-lg p-6 flex flex-col min-h-fit">
            <div className="flex justify-between">
              <div className="flex flex-col w-3/5">
                <p className="font-semibold text-2xl">
                  <span className="text-orange-500">About</span> Author
                </p>
                <p className="text-gray-700 text-lg my-4">
                  {book?.authors[0].name}
                </p>
              </div>
              <div className="w-2/5">
                <Image
                  src="/assets/images/author.png"
                  width={88}
                  height={88}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <p className="text-xs text-gray-800 mb-4">
              {book?.authors[0].description}
            </p>

            <p className="font-bold text-gray-700 text-sm mb-2">Other Books</p>
            <div className="flex">
              {/* <Image
                src="/assets/images/book2.png"
                width={75}
                height={75}
                alt="Picture of the author"
                style={{ marginRight: 16 }}
              />
              <Image
                src="/assets/images/book3.png"
                width={75}
                height={75}
                alt="Picture of the author"
              /> */}
              {book?.ortherBooks.map((item, index) => {
                return (
                    <Image
                      src={item.cover_image_url}
                      width={75}
                      height={75}
                      alt="Picture of the author"
                    />
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-14 mt-8">
          <div className="bg-white w-full border-b-2 border-gray-200">
            <div className="py-2">
              <span className="p-2 border-b-4 border-orange-400 font-semibold text-orange-400">
                Overview
              </span>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="w-1/5 bg-white p-1 rounded-md text-center border-2 border-gray-200">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold text-gray-500">
                  Publish Date
                </p>
                <p className="text-xs text-gray-700 font-semibold">
                  {book?.book.publish_year}
                </p>
              </div>
            </div>
            <div className="w-1/5 bg-white p-1 rounded-md text-center border-2 border-gray-200">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold text-gray-500">Publisher</p>
                <p className="text-xs text-gray-700 font-semibold text-orange-500">
                  {book?.book.publisher}
                </p>
              </div>
            </div>
            <div className="w-1/5 bg-white p-1 rounded-md text-center border-2 border-gray-200">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold text-gray-500">Language</p>
                <p className="text-xs text-gray-700 font-semibold text-orange-500">
                  English
                </p>
              </div>
            </div>
            <div className="w-1/5 bg-white p-1 rounded-md text-center border-2 border-gray-200">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold text-gray-500">Pages</p>
                <p className="text-xs text-gray-700 font-semibold">
                  {book?.book.page_number}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm py-6 font-semibold text-gray-500">
            Preview availiable in:{" "}
            <span className="text-orange-500">{book?.book.language}</span>
          </p>
          <p className="text-xs text-gray-800">{book?.book.description}</p>
          <div className="text-gray-700 p-6 w-1/2 mt-6 rounded-md border-2 border-gray-200 bg-white">
            <p className="font-semibold text-2xl">Book Details</p>
            <p className="text-sm font-semibold mt-6">{book?.book.publisher}</p>
            <p className="text-xs font-semibold my-2">{book?.book.language}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
