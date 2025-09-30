import React from 'react'
import { Route, Routes } from "react-router";
import Home from './Home';
import Recipes from './Recipes';
import About from './About';
import CreateRecipe from './CreateRecipe';
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Recipes' element={<Recipes />} />
                <Route path='/CreateRecipe' element={<CreateRecipe />} />
            </Routes>
        </div>
    )
}

export default MainRoutes