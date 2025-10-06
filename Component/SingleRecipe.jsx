import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../Context/Context";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const { data, setdata } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams(); // recipe id from URL
console.log(id);


  // Find the recipe that matches the id from params
  const recipe = data.find((r) => String(r.id) === String(id));

  // setup form with default values from recipe
  const { register, handleSubmit, reset } = useForm({
    defaultValues: recipe,
  });

  // ✅ update recipe handler
  const updatesHandler = (updatedRecipe) => {
    // replace the old recipe with the new updated one
    const newData = data.map((r) =>
      String(r.id) === String(id) ? { ...r, ...updatedRecipe } : r
    );
    setdata(newData);
    toast.success("Recipe Updated ✅");
    reset(updatedRecipe);
    navigate("/recipes");
  };

  // ✅ delete recipe handler
  const Deletedhandler = () => {
    const filteredData = data.filter((r) => String(r.id) !== String(id));
    setdata(filteredData);
    toast.error("Recipe Deleted ❌");
    navigate("/recipes");
  };

  // if recipe is not found yet
  if (!recipe) return <h2>Loading...</h2>;

  return (
    <div className="w-full flex gap-3 p-4">
      {/* ---------- Left side: Recipe details ---------- */}
      <div className="RecipeDets flex flex-col gap-4 rounded-md shadow-amber-800 shadow p-4 items-center w-1/2">
        <img src={recipe.image} className="w-30 rounded-full" alt="recipe" />
        <h1 className="text-md">
          <span className="text-amber-600">Dishname: </span>
          {recipe.DishName} ,{" "}
          <span className="text-amber-600">Mealtype: </span>
          {recipe.MealType}
        </h1>
        <h1>{recipe.Description}</h1>
        <h1>{recipe.Ingredients}</h1>
        <h1>{recipe.Instruction}</h1>
        <h1>{recipe.ChiefName}</h1>
      </div>

      {/* ---------- Right side: Edit Form ---------- */}
      <div className="RecipeEdit shadow-amber-400 flex flex-col gap-4 shadow rounded-md p-4 w-1/2">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(updatesHandler)}>
          <input
            className="cursor-pointer px-4 py-4 w-full bg-gray-100 rounded shadow outline-0 text-xl"
            type="url"
            placeholder="Image URL"
            {...register("image")}
          />

          <div className="flex w-full gap-3 py-2">
            <input
              className="bg-gray-200 p-4 w-1/2 cursor-pointer outline-0 rounded-md shadow"
              type="text"
              placeholder="Dish Name"
              {...register("DishName")}
            />
            <select
              className="cursor-pointer bg-gray-200 p-4 w-1/2 outline-0 rounded-md shadow"
              {...register("MealType")}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>

          <textarea
            className="cursor-pointer w-full max-h-25 bg-gray-100 outline-0 p-4 rounded-md shadow"
            placeholder="Description"
            {...register("Description")}
          />

          <textarea
            className="cursor-pointer w-full max-h-20 bg-gray-100 outline-0 p-4 rounded-md shadow"
            placeholder="Ingredients"
            {...register("Ingredients")}
          />

          <textarea
            className="cursor-pointer w-full max-h-25 bg-gray-100 outline-0 p-4 rounded-md shadow"
            placeholder="Instruction"
            {...register("Instruction")}
          />

          <input
            className="cursor-pointer bg-gray-100 outline-0 p-4 rounded-md shadow"
            type="text"
            placeholder="Chief Name"
            {...register("ChiefName")}
          />

          <div className="flex justify-center items-center gap-3 w-full mt-4">
            <button
              type="submit"
              className="bg-blue-400 p-4 w-1/2 rounded-md text-white text-xl"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={Deletedhandler}
              className="bg-red-400 p-4 w-1/2 rounded-md text-white text-xl"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
