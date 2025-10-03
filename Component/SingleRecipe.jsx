import { useNavigate, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const naviagte=useNavigate()
  const { data ,setdata } = useContext(DataContext);

  const { id } = useParams();

  const recipe = data.find((recipe) => id == recipe.id);
  // console.log(id);
  // console.log(recipe);
  const Deletedhandler = () => {
    const filteredData=data.filter((r) => r.id !== id);
    setdata(filteredData)
    toast.error("Deleted Recipe")
    naviagte("/recipes")
  };
  const{handleSubmit}=useForm()
  return recipe ? (
    <div className="w-full flex gap-3 p-4">
      <div className="RecipeDets flex flex-col gap-4 rounded-md shadow-amber-800 shadow justify-center p-4 items-center w-1/2">
        <img src={recipe.image} className="w-30 rounded-full" alt="" />
        <h1 className="text-md">
          <span className="text-amber-600">Dishname:- </span>
          {recipe.DishName}, <span className="text-amber-600">Mealtype:-</span>{" "}
          {recipe.MealType}
        </h1>
        <h1>{recipe.Description}</h1>
        <h1>{recipe.Ingredients}</h1>
        <h1>{recipe.Instruction}</h1>
        <h1>{recipe.ChiefName}</h1>
      </div>
      <div className="RecipeEdit shadow-amber-400 gap-4 flex flex-col shadow rounded-md p-4 w-1/2">
      <form onSubmit={handleSubmit(updatesHandler)} >

        <input
          className="cursor-pointer px-4 py-4 w-full bg-gray-100 rounded shadow shadow-gray-400 outline-0 text-xl"
          type="url"
          value={recipe.image}
          />
        <div className="flex w-full gap-3 justify-center py-2">
          <input
            className="bg-gray-200 p-4 w-1/2 cursor-pointer outline-0 rounded-md shadow shadow-gray-400"
            type="text"
            value={recipe.DishName}
            />
          <select
            className="cursor-pointer bg-gray-200 p-4 w-1/2 outline-0  rounded-md shadow shadow-gray-400"
            // type="text"
            value={recipe.MealType}
            >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <textarea className="cursor-pointer max-h-25 bg-gray-100 outline-0 p-4 rounded-md shadow shadow-gray-400">
          {recipe.Description}
        </textarea>
        <textarea
          className="cursor-pointer max-h-20 bg-gray-100 outline-0 p-4 rounded-md shadow shadow-gray-400"
          type="text"
          value={recipe.Ingredients}
          ></textarea>
        <textarea
          className="cursor-pointer max-h-25 bg-gray-100 outline-0 p-4 rounded-md shadow shadow-gray-400"
          type="text"
          value={recipe.Instruction}
          ></textarea>

        <input
          className="cursor-pointer bg-gray-100 outline-0 p-4 rounded-md shadow shadow-gray-400"
          type="text"
          value={recipe.ChiefName}
          />
        <div className="Button flex justify-center items-center gap-3 w-full">
          <button className="bg-blue-400 p-4 w-1/2 rounded-md text-white text-xl">
            Update Button
          </button>
          <button
            onClick={Deletedhandler}
            className="bg-red-400 w-1/2 p-4 rounded-md text-white text-xl"
            >
            Delete Recipe{" "}
          </button>
        </div>
            </form>
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default SingleRecipe;
