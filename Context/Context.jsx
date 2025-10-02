import React, { useState, createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      DishName: "Classic Margherita Pizza",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam eaque necessitatibus dicta dignissimos mollitia similique. Dignissimos quas illo est obcaecati porro earum pariatur doloribus ex, rem cupiditate natus soluta",
      Ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      Instruction: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      ChiefName: "Amar",
      // cuisine: "Italian",
      // caloriesPerServing: 300,
      // tags: ["Pizza", "Italian"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      MealType: ["Dinner"],
    },
  ]);
  // console.log();

  return (
    <DataContext.Provider value={{ data, setdata }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
