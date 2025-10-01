import React, { useContext } from "react";
import { DataContext } from "../Context/Context";

const Recipes = () => {
  const { data, setdata } = useContext(DataContext);
  const name = data.map((recipe) => {
    {
      console.log(recipe.DishName);
    }
    return <h1 key={recipe.id}> {recipe.DishName}</h1>;
  });
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Recipes;
