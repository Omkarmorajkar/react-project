import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Navbar({ fetchData }) {
  return (
    <nav className=" w-full bg-white shadow-md flex justify-between px-4 py- items-center z-50">
      {/* Search Box */}
      <SearchBox onSearch={fetchData} />

      {/* Navigation Links */}
      <ul className="flex gap-4 font-bold text-lg">
        <li className="hover:text-blue-500 hover:underline transition-all duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-500 hover:underline transition-all duration-300">
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
