"use client";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const quantity = 2;

const Bookitem = () => {
  return (
    <div className="px-8 mb-4 text-gray-700">
      <div className="flex w-full bg-white rounded-lg shadow-md">
        <div className="w-4/12 flex p-4">
          <Image
            src="/assets/images/book.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
          <div className="ml-8 flex flex-col justify-center">
            <p className="text-lg">Don't Make Me Think</p>
            <div className="flex flex-col justify-around mt-2">
              <p className="text-base">Steve Krug 2000</p>
              <p className="text-xs">Second Edition</p>
            </div>
          </div>
        </div>
        <div className="w-2/12 flex justify-center flex-col">
          <p className="text-lg">Computer Science</p>
          <p className="text-base mt-2">UX Design</p>
        </div>
        <div className="w-2/12 flex justify-center flex-col items-center">
          <div
            className={`text-base w-20 text-center rounded text-gray-200 ${
              quantity !== 0 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            20
          </div>
          {quantity !== 0 && (
            <div className="flex items-center mt-2">
              <p className="text-base">CS A-15</p>
            </div>
          )}
        </div>
        <div className="w-3/12 flex justify-center items-center">
          <div className="text-orange-500">
            <FmdGoodIcon />
          </div>
          <p className="text-base font-bold">Ta Quang Buu Library</p>
        </div>
      </div>
    </div>
  );
};

export default Bookitem;
