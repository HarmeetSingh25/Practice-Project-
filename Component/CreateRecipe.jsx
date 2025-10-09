import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../Context/Context.jsx";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { data: contextData, setdata: setContextData } =
    useContext(DataContext);

  const onSubmit = (recipe) => {
    recipe.id = nanoid();
    const CopyData = [...contextData];
    CopyData.push(recipe);
    setContextData(CopyData);

    localStorage.setItem("recipe", JSON.stringify(CopyData));
    toast.success("✅ New Recipe Created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <form
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold text-center text-pink-600">
          🍴 Create a New Recipe
        </h1>

        {/* Favorite Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            {...register("fav")}
            type="checkbox"
            className="w-5 h-5 accent-pink-500"
          />
          <span className="text-gray-700">Mark as Favorite ❤️</span>
        </label>

        {/* Image */}
        <div>
          <label className="text-gray-700 font-medium">Image URL</label>
          <input
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
            {...register("image", { required: true })}
            type="url"
            placeholder="Enter the Image Url"
          />
        </div>

        {/* Dish Name */}
        <div>
          <label className="text-gray-700 font-medium">Dish Name</label>
          <input
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
            {...register("DishName", { required: true })}
            type="text"
            placeholder="Enter the dish name"
          />
        </div>

        {/* Chief Name */}
        <div>
          <label className="text-gray-700 font-medium">Chef Name</label>
          <input
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
            {...register("ChiefName")}
            type="text"
            placeholder="Enter the Chef Name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-gray-700 font-medium">Description</label>
          <textarea
            {...register("Description")}
            placeholder="Write a short description..."
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="text-gray-700 font-medium">Ingredients</label>
          <textarea
            {...register("Ingredients")}
            placeholder="List ingredients..."
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="text-gray-700 font-medium">Instructions</label>
          <textarea
            {...register("Instruction")}
            placeholder="Step by step instructions..."
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        {/* Meal Type */}
        <div>
          <label className="text-gray-700 font-medium">Meal Type</label>
          <select
            {...register("MealType")}
            className="px-4 py-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
