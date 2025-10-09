import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import RecipeCard from "./RecipeCard";

const Fav = () => {
  const { data } = useContext(DataContext);

  // filter favorites directly
  const favRecipes = data.filter((r) => r.fav === true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-pink-50 p-10">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
        ❤️ Your Favorite Recipes
      </h1>

      {favRecipes.length > 0 ? (
        <div className=" flex flex-wrap justify-evenly gap-10">
          {favRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <i className="ri-heart-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl text-gray-500">No favorites found</h2>
          <p className="text-gray-400 mt-2">
            Start exploring recipes and mark them ❤️ to see them here!
          </p>
        </div>
      )}
    </div>
  );
};

export default Fav;
