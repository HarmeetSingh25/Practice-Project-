import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, DishName, Description, image, ChiefName, fav } = recipe;

  return (
    <Link
      to={`/recipes/detail/${id}`}
      key={id}
      className="
        hover:scale-102 transition-all rounded-md overflow-hidden 
        flex flex-col gap-3 
        w-full sm:w-[45%] lg:w-[25%] 
        bg-gray-400 shadow-gray-900 shadow relative"
    >
      {/* Fav Icon */}
      <div className="absolute bg-neutral-100 text-black px-2 py-1 rounded-bl-md m-1 rounded-tr-md">
        <i
          className={`text-3xl ${
            fav ? "ri-heart-3-fill text-red-500" : "ri-heart-3-line"
          }`}
        ></i>
      </div>

      {/* Image */}
      <img className="w-full h-48 sm:h-60 object-cover" src={image} alt={DishName} />

      {/* Text Content */}
      <div className="p-5 text-cyan-50 flex flex-col gap-2 text-center">
        <h1 className="text-lg font-semibold">{DishName}</h1>
        <hr className="text-gray-50" />
        <h3>{Description.slice(0, 100)}...</h3>
        <hr className="text-gray-50" />
        <h1 className="text-right decoration-2 pb-2 underline">{ChiefName}</h1>
      </div>
    </Link>
  );
};

export default RecipeCard;
