"use client";

import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/assets/images/logo.png"
        width={100}
        height={100}
        alt="Picture of the author"
        className="py-8"
      />

      <div className="flex flex-col text-zinc-400">
        <div className="flex items-center pt-4">
          <SearchIcon />
          <span className="ml-2">Search</span>
        </div>
        <div className="flex items-center pt-4">
          <SearchIcon />
          <span className="ml-2">Request List</span>
        </div>
        <div className="flex items-center pt-4">
          <SearchIcon />
          <span className="ml-2">Borrowed List</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
