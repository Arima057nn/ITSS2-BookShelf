"use client";
import { bookApi } from "@/app/services";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Search from "@/app/components/search";
import Action from "@/app/components/action";
import Requestitem from "@/app/components/requestitem";

export default function Request() {
  const [books, setBooks] = useState<any>([]);

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <div></div>
        <Action />
      </div>
      <div className="flex justify-between items-center pt-6 pb-4 mx-8">
        <p className=" text-gray-700 text-lg font-semibold">Request list</p>
      </div>
      <div className="flex w-10/12 px-8 pt-8 pb-4 font-medium text-base">
        <div className="w-5/12">Title</div>
        <div className="w-2/12 text-center">Book Number</div>
        <div className="w-2/12 text-center">Borrow Date</div>
        <div className="w-2/12 text-center">Request Due Date</div>
      </div>
      <Requestitem />
    </div>
  );
}
