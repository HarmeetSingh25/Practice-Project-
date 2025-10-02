import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import  { DataContext } from "../Context/Context";

const SingleRecipe = () => {
  const  {data}  = useContext(DataContext);
  
  const {id}  = useParams();
  
  const recipe= data.find((recipe) => id == recipe.id);
  console.log(id);
  console.log(recipe);
  return <div className="w-full">
    <div className="RecipeDets w-1/2">
    <img src={recipe.image} alt="" />
    </div>
    <div className="RecipeEdit w-1/2"></div>
  </div>;
};

export default SingleRecipe;
