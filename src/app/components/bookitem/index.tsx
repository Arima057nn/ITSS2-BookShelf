"use client";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Link from "next/link";
import { Author, LibraryInterface } from "@/app/models/books";

const Bookitem: React.FC<{
  quantity: number;
  publisher: string;
  author: Author[];
  publish_year: number;
  title: string;
  category: string;
  sub_category: string | null;
  item: LibraryInterface;
}> = ({
  quantity,
  publisher,
  author,
  publish_year,
  title,
  category,
  sub_category,
  item,
}) => {
  console.log("item", author);
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
            <Link href={`/book/${item.id}`}>
              <p className="text-lg">{title}</p>
            </Link>
            <div className="flex flex-col justify-around mt-2">
              <p className="text-sm">
                {author.map((item: Author) => (
                  <span>{item.name}, </span>
                ))}
                {publish_year}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/12 flex justify-center flex-col">
          <p className="text-base">{category}</p>
          {sub_category !== null && (
            <p className="text-base mt-2">{sub_category}</p>
          )}
        </div>
        <div className="w-2/12 flex justify-center flex-col items-center">
          <div
            className={`text-base w-20 text-center rounded text-gray-200 ${
              quantity !== 0 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {quantity}
          </div>
          {quantity !== 0 && (
            <div className="flex items-center mt-2">
              <p className="text-base">{item.location}</p>
            </div>
          )}
        </div>
        <div className="w-3/12 flex justify-center items-center">
          <div className="text-orange-500">
            <FmdGoodIcon />
          </div>
          <p className="text-base font-bold">{item.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookitem;
