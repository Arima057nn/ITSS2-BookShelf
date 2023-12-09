"use client";

import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <div className=" bg-white max-w-fit rounded-full flex items-center border-2 border-gray-200 hover:border-gray-400">
      <div className="w-28 flex p-3 justify-center bg-gray-300 rounded-s-full">
        <select
          name="cars"
          id="cars"
          className="bg-gray-300 h-full border-gray-300 border-2 outline-none"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <input
        className="p-3 ml-2 w-80 outline-none text-gray-700"
        placeholder={"Search"}
      />
      <div className="pr-2 border-r border-gray-300">
        <SearchIcon
          style={{
            color: "red",
          }}
        />
      </div>
      <div className="w-10"></div>
    </div>
  );
};

export default Search;
