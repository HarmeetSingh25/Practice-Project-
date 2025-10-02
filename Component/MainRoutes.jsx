import React from 'react';
import { Route, Routes } from 'react-router-dom';   // ✅ correct import
import Home from './Home';
import Recipes from './Recipes';
import About from './About';
import CreateRecipe from './CreateRecipe';
import SingleRecipe from './SingleRecipe';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/recipes/detail/:id" element={<SingleRecipe />} />
    </Routes>
  );
};

export default MainRoutes;
