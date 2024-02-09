import React, { useState } from "react";
import CocktailDisplay from "./CocktailDisplay";
import ModalPopup from "./ModalPopup";

const Applayout = ({ data }) => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleCloseModal = () => {
    setSelectedCocktail(null);
  };

  return (
    <>
      <div className="mx-auto ">
        <CocktailDisplay
          cocktails={data}
          onCocktailClick={handleCocktailClick}
        />
        {selectedCocktail && (
          <ModalPopup
            cocktail={selectedCocktail}
            onClose={handleCloseModal}
            // onSaveToFavorites={handleSaveToFavorites}
          />
        )}
      </div>
    </>
  );
};

export default React.memo(Applayout);
