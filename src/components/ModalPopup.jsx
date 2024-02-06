import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";

function ModalPopup({ cocktail, onClose }) {
  console.log("cocktail data " + cocktail);
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyInFavorites = existingFavorites.some(
      (fav) => fav.idDrink === cocktail.idDrink
    );

    setFavorites(isAlreadyInFavorites);
  }, [cocktail]);

  const handleLikeToggle = () => {
    setFavorites(!favorites);
    handleSaveToFavorites();
  };

  const handleSaveToFavorites = () => {
    console.log("id " + cocktail.idDrink);
    try {
      const existingFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const isAlreadyInFavorites = existingFavorites.some(
        (fav) => fav.idDrink === cocktail.idDrink
      );

      if (!isAlreadyInFavorites) {
        const updatedFavorites = [...existingFavorites, cocktail];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        console.log("Saved to favorites:", cocktail);
      } else {
        console.log("Cocktail is already in favorites.");
        if (favorites) {
          const updatedFavorites = existingFavorites.filter(
            (fav) => fav.idDrink !== cocktail.idDrink
          );
          localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
          console.log("Removed from favorites:", cocktail);
        }
      }
    } catch (error) {
      console.error("Error saving to favorites:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md relative">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={onClose}
          className="text-2xl absolute top-2 right-4 cursor-pointer"
        />

        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="w-full h-48 object-cover mb-4 mt-2 rounded-md shadow"
        />
        <p className="text-center font-bold text-xl mb-2">
          {cocktail.strDrink}
        </p>
        <p>
          <span className="font-bold">Ingredients:</span>{" "}
          <span className="italic">
            {cocktail.strIngredient1}, {cocktail.strIngredient2},
            {cocktail.strIngredient3},{cocktail.strIngredient4},
            {cocktail.strIngredient5},
          </span>
        </p>
        <p className="mt-2">
          <span className="font-bold">Instructions:</span>{" "}
          {cocktail.strInstructions}
        </p>

        <FontAwesomeIcon
          icon={faHeart}
          onClick={handleLikeToggle}
          className={`${
            favorites ? "text-red-500" : "text-gray-300"
          } text-3xl transition-all duration-300`}
        />
      </div>
    </div>
  );
}

export default ModalPopup;
