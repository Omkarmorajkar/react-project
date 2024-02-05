import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import CocktailDisplay from "./CocktailDisplay";
import ModalPopup from "./ModalPopup";

const Applayout = () => {
  const [data, setData] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const fetchData = async (searchTerm = "a") => {
    try {
      const res = await fetch(
        `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const textData = await res.text();
      const jsonData = textData ? JSON.parse(textData) : null;
      setData(jsonData?.drinks || []);
    } catch (error) {
      console.log(error);
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

  const handleSaveToFavorites = (cocktail) => {
    // Implement saving to local storage
    console.log("Saved to favorites:", cocktail);
  };

  return (
    <div className="mx-auto ">
      {/* <h1 className="text-4xl font-bold mb-4">Cocktails</h1> */}
      <SearchBox onSearch={fetchData} />
      <CocktailDisplay cocktails={data} onCocktailClick={handleCocktailClick} />
      {selectedCocktail && (
        <ModalPopup
          cocktail={selectedCocktail}
          onClose={handleCloseModal}
          onSaveToFavorites={handleSaveToFavorites}
        />
      )}
    </div>
  );
};

export default React.memo(Applayout);
