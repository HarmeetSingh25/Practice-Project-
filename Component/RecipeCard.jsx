import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  // console.log(recipe.id);
  const { id, DishName, Description, Ingredients, Instruction ,image ,ChiefName } = recipe;
//   console.log(id, DishName, Description, Ingredients, Instruction, image);

  return <Link to={`/recipes/detail/${id}`} key={id} className="hover:scale-102 transition-all  rounded-md overflow-hidden m-5 flex flex-col gap-3 w-[25vw]  bg-gray-400 shadow-gray-900 shadow">
    <img className="h-60 w-full  object-cover" src={image} alt="" />
    <div className="p-5 text-cyan-50 flex flex-col gap-2  text-center">

    <h1>{DishName}</h1>
    <hr className="text-gray-50"/>
    <h3>{Description.slice(0,100)}...{" "}</h3>
    <hr className="text-gray-50"/>
    <h1 className="text-right decoration-2 pb-2 underline ">{ChiefName}</h1>
    </div>
  </Link>;
};

export default RecipeCard;
