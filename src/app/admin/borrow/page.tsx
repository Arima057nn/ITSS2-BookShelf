"use client";

import withAdminAuth from "@/app/components/withAdminAuth";

function Borrow() {
  return (
    <div className="bg-white flex flex-col py-8 px-12 rounded-lg items-center justify-center text-gray-700 shadow-2xl">
      Borrow
    </div>
  );
}

export default withAdminAuth(Borrow);
