"use client";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Link from "next/link";
import { BooksInterface } from "@/app/models/books";

const Requestitem: React.FC<{
  book: BooksInterface;
}> = ({ book }) => {
  return (
    <div className="px-8 mb-4 text-gray-700">
      <div className="flex w-10/12 p-8 text-base bg-white rounded-md">
        <div className="w-5/12">Ta Quang Buu Library</div>
        <div className="w-2/12 text-center">3</div>
        <div className="w-2/12 text-center">2023-11-20</div>
        <div className="w-2/12 text-center">2023-11-25</div>
      </div>
    </div>
  );
};

export default Requestitem;
