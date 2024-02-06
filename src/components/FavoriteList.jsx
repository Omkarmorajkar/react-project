import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load favorites from local storage on component mount
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(existingFavorites);
  }, []);

  const handleRemoveFavorite = (idDrink) => {
    // Remove the favorite with the specified idDrink from local storage
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.idDrink !== idDrink
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h1 className="text-4xl font-bold mb-4">Favorite Cocktails</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added yet.</p>
      ) : (
        <>
          <ul className="grid gap-4">
            {favorites.map((favorite) => (
              <li
                key={favorite.idDrink}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <img
                  src={favorite.strDrinkThumb}
                  alt={favorite.strDrink}
                  className="w-full h-32 object-cover mb-2 rounded-md shadow"
                />
                <p className="font-bold text-lg mb-2">{favorite.strDrink}</p>
                <p className="text-gray-600">{favorite.strInstructions}</p>
                <button
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleRemoveFavorite(favorite.idDrink)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default FavoriteList;
