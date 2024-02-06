import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-gray-400">
      <h1 className="text-2xl font-bold text-white">Cocktails</h1>
      <div className="gap-4 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search cocktails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-2 py-2 rounded-xl focus:ring outline-none shadow-md shadow-gray-600 transition-all duration-300 ring-gray-300 focus:shadow-inner focus:shadow-black font-semibold"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-xl font-bold"
        >
          Search
        </button>
      </div>
      <FontAwesomeIcon
        icon={faHeart}
        onClick={() => {
          navigate("/favorite");
        }}
        className={`text-red-500
           text-3xl transition-all duration-300`}
      />
    </div>
  );
}

export default SearchBox;
