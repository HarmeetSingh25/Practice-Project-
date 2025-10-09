import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 to-orange-100 p-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        🍲 All Recipes
      </h1>

      {data.length > 0 ? (
        // ✅ Responsive Grid
        <div className="flex gap-5 justify-evenly  flex-wrap">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        // ✅ Empty State
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <i className="ri-emotion-sad-line text-6xl text-gray-400 mb-4"></i>
          <h2 className="text-2xl text-gray-600 mb-2">No Recipes Found</h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven’t added any recipes yet.
          </p>
          <Link
            to="/create-recipe"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md"
          >
            ➕ Create a Recipe
          </Link>
        </div>
      )}
    </div>
  );
};

export default Recipes;
