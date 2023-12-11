"use client";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Link from "next/link";

const Bookitem: React.FC<{ book: any }> = ({ book }) => {
  console.log("book:", book.bookDto.cover_image_url);
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
            <Link href={`/book/${book.bookDto.id}`}>
              <p className="text-lg">{book.bookDto.title}</p>
            </Link>
            <div className="flex flex-col justify-around mt-2">
              <p className="text-sm">
                {book.bookDto.publisher} {book.bookDto.publish_year}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/12 flex justify-center flex-col">
          <p className="text-base">
            {book.authorBookDtos[0].book.category.name}
          </p>
          {/* <p className="text-base mt-2">UX Design</p> */}
        </div>
        <div className="w-2/12 flex justify-center flex-col items-center">
          <div
            className={`text-base w-20 text-center rounded text-gray-200 ${
              book.bookDto.quantity !== 0 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {book.bookDto.quantity}
          </div>
          {book.bookDto.quantity !== 0 && (
            <div className="flex items-center mt-2">
              <p className="text-base">{book.library_location}</p>
            </div>
          )}
        </div>
        <div className="w-3/12 flex justify-center items-center">
          <div className="text-orange-500">
            <FmdGoodIcon />
          </div>
          <p className="text-base font-bold">{book.library_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookitem;
