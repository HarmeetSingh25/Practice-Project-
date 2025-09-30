import React from 'react'
import { useForm } from "react-hook-form";

const CreateRecipe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div>
            <form className='m-4' onSubmit={handleSubmit(onsubmit, onerror)}>
                <input className=' px-4 py-4 w-80 border-b border-black outline-0 text-xl' {...register("fsdf")} type="text" placeholder='Enter the dish name ' />
            </form>
        </div>
    )
}

export default CreateRecipe