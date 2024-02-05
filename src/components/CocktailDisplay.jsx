import React from "react";

function CocktailDisplay({ cocktails, onCocktailClick }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {cocktails.map((cocktail) => (
        <div
          key={cocktail.idDrink}
          className="border p-4 cursor-pointer hover:shadow-lg hover:bg-gray-100 rounded-md transition-all duration-300"
          onClick={() => onCocktailClick(cocktail)}
        >
          <div className="relative">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold text-lg">
                {cocktail.strDrink}
              </p>
            </div>
          </div>
          <p className="text-center font-semibold mt-2">
            {cocktail.strCategory}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CocktailDisplay;
