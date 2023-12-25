"use client";

import withAdminAuth from "../components/withAdminAuth";

function Admin() {
  return (
    <div className="bg-white flex flex-col py-8 px-12 rounded-lg items-center justify-center text-gray-700 shadow-2xl">
      Homepage Admin
    </div>
  );
}

export default withAdminAuth(Admin);
