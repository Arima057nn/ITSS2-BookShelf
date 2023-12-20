"use client";

import { BorrowRequestInterface } from "@/app/models/request";

const Requestitem: React.FC<{
  request: BorrowRequestInterface;
}> = ({ request }) => {
  return (
    <div className="flex px-8 mb-4 text-gray-700">
      <div className="flex w-10/12 p-8 text-base bg-white rounded-md">
        <div className="w-5/12">{request.libraryName}</div>
        <div className="w-2/12 text-center">{request.bookNumber}</div>
        <div className="w-2/12 text-center">{request.borrowDate}</div>
        <div className="w-2/12 text-center">{request.requestDueDate}</div>
      </div>
      <div className="flex w-2/12 flex justify-center items-center">
        {request.status === "UNSENT" ? (
          <div className="bg-teal-600 text-sm py-2 px-4 rounded-md text-white">
            Borrow
          </div>
        ) : (
          <div className="bg-orange-500 text-sm py-2 px-4 rounded-md text-white">
            Cancel
          </div>
        )}
      </div>
    </div>
  );
};

export default Requestitem;
