import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const { data, setdata } = useContext(DataContext);
  const Card = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex  gap-10">
      {data.length > 0 ? Card : "No Recipes Found "}
    </div>
  );
};

export default Recipes;
