import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../Context/Context.jsx"; // ✅ import the context, not provider
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';

const CreateRecipe = ({ data, setdata }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { data: contextData, setdata: setContextData } = useContext(DataContext);

  const onSubmit = (recipe) => {
    recipe.id = nanoid();
    setContextData([...contextData, recipe]);
    toast.success("Create New Recipe ")
    reset();
    navigate("/recipes")
  };

  return (
    <div>
      <form
        className="m-6 flex flex-col gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="px-4 py-4 w-80 border-b border-black outline-0 text-xl"
          {...register("image")}
          type="url"
          placeholder="Enter the Image Url"
        />

        <input
          className="px-4 py-4 w-80 border-b border-black outline-0 text-xl"
          {...register("DishName")}
          type="text"
          placeholder="Enter the dish name"
        />

      

        <input
          className="px-4 py-4 w-80 border-b border-black outline-0 text-xl"
          {...register("ChiefName")}
          type="text"
          placeholder="Enter the Chief Name"
        />

        <textarea
          {...register("Description")}
          placeholder="Write the description for recipe"
          className="border-b border-black outline-0 w-85"
        />

        <textarea
          {...register("Ingredients")}
          placeholder="Write the ingredient of recipe"
          className="border-b border-black outline-0 w-85"
        />

        <textarea
          {...register("Instruction")}
          placeholder="Write the instruction for cook"
          className="border-b border-black outline-0 w-85"
        />

        <select {...register("MealType")} className="w-85">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>

        <button type="submit" className="bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
