"use client";

import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const quantity = 2;

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="flex p-8 ">
      <div className="flex flex-col">
        <div className="max-h-fit px-4 py-8  rounded-lg bg-white">
          <Image
            src="/assets/images/book.png"
            width={268}
            height={268}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex ml-14">
          <div className="w-5/12 h-10 flex flex-col text-gray-600">
            <p className="text-3xl">Don't Make Me Think</p>
            <p className="text-base">
              By <span className="underline decoration-solid">Steve Krug</span>,
              2000
            </p>
            <p className="text-xs text-gray-400 mb-8">Second Edition</p>
            <p className="text-sm text-gray-700 font-semibold">Status</p>
            <div>
              <div
                className={`text-base w-20 text-center my-2 rounded text-gray-200 ${
                  quantity !== 0 ? "bg-green-500" : "bg-red-500"
                }`}
              >
                20
              </div>
              {quantity !== 0 && (
                <div>
                  <div className="flex items-center">
                    <div className="text-orange-500">
                      <FmdGoodIcon />
                    </div>
                    <p className="text-base">CS A-15</p>
                  </div>
                  <p className="text-base font-bold my-4">
                    Ta Quang Buu Library
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
                <p className="text-gray-700 text-lg my-4">Steve Krup</p>
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
              Steve Krug is a usability consultant who has more than 30 years of
              experience as a user advocate for companies like Apple, Netscape,
              AOL, Lexus, and others. Based in part on the success of his first
              book, Don't Make Me Think, he has become a highly sought-after
              speaker on usability design.
            </p>

            <p className="font-bold text-gray-700 text-sm mb-2">Other Books</p>
            <div className="flex">
              <Image
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
              />
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
                <p className="text-xs text-gray-700 font-semibold">2000</p>
              </div>
            </div>
            <div className="w-1/5 bg-white p-1 rounded-md text-center border-2 border-gray-200">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold text-gray-500">Publisher</p>
                <p className="text-xs text-gray-700 font-semibold text-orange-500">
                  New Riders Press
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
                <p className="text-xs text-gray-700 font-semibold">216</p>
              </div>
            </div>
          </div>

          <p className="text-sm py-6 font-semibold text-gray-500">
            Preview availiable in:{" "}
            <span className="text-orange-500">English</span>
          </p>
          <p className="text-xs text-gray-800">
            Since Don’t Make Me Think was first published in 2000, hundreds of
            thousands of Web designers and developers have relied on usability
            guru Steve Krug’s guide to help them understand the principles of
            intuitive navigation and information design. Witty, commonsensical,
            and eminently practical, it’s one of the best-loved and most... Read
            more
          </p>
          <div className="text-gray-700 p-6 w-1/2 mt-6 rounded-md border-2 border-gray-200 bg-white">
            <p className="font-semibold text-2xl">Book Details</p>
            <p className="text-sm font-semibold mt-6">Published in</p>
            <p className="text-xs font-semibold my-2">United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
