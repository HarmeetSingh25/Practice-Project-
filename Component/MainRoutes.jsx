import React from 'react';
import { Route, Routes } from 'react-router-dom';   // ✅ correct import
import Home from './Home';
import Recipes from './Recipes';
import About from './About';
import CreateRecipe from './CreateRecipe';
import SingleRecipe from './SingleRecipe';
import Fav from './Fav';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/recipes/detail/:id" element={<SingleRecipe />} />
      <Route path="/Fav" element={<Fav />} />
    </Routes>
  );
};

export default MainRoutes;
