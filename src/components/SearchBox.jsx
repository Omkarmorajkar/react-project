import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-between items-center p-2">
      <div className="w-96 flex flex-row items-center rounded-full border-2  border-gray-300 bg-gray-200 px-4 py-1 focus:outline-none focus:border-blue-500 text-gray-700 font-semibold">
        <input
          type="text"
          placeholder="Search cocktails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mr-4 focus:outline-none bg-gray-200 "
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 px-4 py-1 rounded-full font-bold text-white"
        >
          Search
        </button>
      </div>
      {/* ... */}
    </div>
  );
}

export default SearchBox;
