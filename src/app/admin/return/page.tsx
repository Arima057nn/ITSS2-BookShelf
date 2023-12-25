"use client";

import withAdminAuth from "@/app/components/withAdminAuth";
import { TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

function Return() {
  const [code, setCode] = useState("");
  return (
    <div className="bg-white flex flex-col py-8 px-12 rounded-lg items-center justify-center text-gray-700 shadow-2xl">
      <Image
        src="/assets/images/logo.png"
        width={110}
        height={110}
        alt="Picture of the author"
        className="py-6"
        priority
      />
      <p className="text-sm text-gray-600 py-4">Input the request code</p>
      <form className="flex flex-col justify-start w-80">
        <p className="text-sm font-semibold my-6">Request code</p>
        <TextField
          maxRows={4}
          required
          type="text"
          value={code}
          size="small"
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-[#FA7C54] hover:bg-orange-600 text-sm text-white rounded-md text-center py-3 mt-8 mb-48 cursor-pointer"
        >
          Submit request code
        </button>
      </form>
    </div>
  );
}
export default withAdminAuth(Return);
