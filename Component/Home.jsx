import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Context";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      {/* Hero Section */}
      <div className="h-[70vh] flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-yellow-200 text-center">
        <h1 className="text-5xl font-bold mb-4">🍕 Welcome to Recipe World</h1>
        <p className="text-xl mb-6">Discover, create, and save your favorite meals</p>
        <Link
          to="/recipes"
          className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg"
        >
          Explore Recipes
        </Link>
      </div>

      {/* Featured Recipes */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">⭐ Featured Recipes</h2>
    <div className="flex flex-wrap justify-start gap-6 mt-6">
  {data.slice(0, 3).map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))}
</div>

        <div className="flex justify-center mt-6">
          <Link to="/recipes" className="px-6 py-3 bg-blue-500 text-white rounded-lg">
            See All Recipes
          </Link>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 text-center bg-gray-100">
        <div>
          <h3 className="text-xl font-bold">📖 Easy Recipes</h3>
          <p>Step by step instructions for everyone.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">❤️ Save Favorites</h3>
          <p>Keep your loved recipes safe in one place.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">🥗 Explore Meals</h3>
          <p>Find recipes for breakfast, lunch and dinner.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 text-white text-center py-10">
        <h2 className="text-2xl mb-4">Got a special recipe? 🍲</h2>
        <Link
          to="/create-recipe"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg text-lg"
        >
          Share Your Recipe
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        Made with ❤️ by Harmeet
      </footer>
    </div>
  );
};

export default Home;
