import React from 'react'
import { NavLink } from "react-router";
const Nav = () => {
    return (
        <div className='bg-gray-200 text-xl flex gap-10 py-5 px-7 my-10 justify-end'>
            <NavLink className={(e)=>e.isActive?"text-red-300":""
            }  to="/">Home</NavLink>
            <NavLink className={(e)=>e.isActive?"text-red-300":""
            }
            to="/About">About</NavLink>
            <NavLink className={(e)=>e.isActive?"text-red-300":""
            }
            to="/Recipes">Recipes</NavLink>
            <NavLink className={(e)=>e.isActive?"text-red-300":""
            }
            to="/CreateRecipe">CreateRecipes</NavLink>
        </div>
    )
}

export default Nav