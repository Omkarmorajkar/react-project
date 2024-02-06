import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import CocktailDisplay from "./CocktailDisplay";
import ModalPopup from "./ModalPopup";

const Applayout = () => {
  const [data, setData] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (searchTerm = "a") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const textData = await res.text();
      const jsonData = textData ? JSON.parse(textData) : null;
      setData(jsonData?.drinks || []);
    } catch (error) {
      console.error(error);
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleCloseModal = () => {
    setSelectedCocktail(null);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-500 font-bold">
        {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-gray-500 font-bold">
        No results found.
      </div>
    );
  }

  return (
    <>
      <SearchBox onSearch={fetchData} />
      <div className="mx-auto ">
        <CocktailDisplay
          cocktails={data}
          onCocktailClick={handleCocktailClick}
        />
        {selectedCocktail && (
          <ModalPopup cocktail={selectedCocktail} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default React.memo(Applayout);
