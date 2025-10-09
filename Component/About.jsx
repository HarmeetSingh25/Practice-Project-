import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-4 text-center'>
      <h1 className='text-5xl text-gray-800 font-medium'>About the App</h1>
      <p className='text-xl tracking-wider'> A place to explore, create, and save recipes</p>
      </div>
      <div className='flex flex-col gap-4 text-center'>
      <h1 className='text-2xl text-gray-800 font-medium'>Our Mission </h1>
      <p className='text-xl tracking-widest w-150'> Cooking should be simpler and fun. This app to build to build inspire creativity in kitchen.</p>
      </div>
      <div className='flex flex-col items-center gap-10'>
        <h3 className='text-3xl font-medium'>Key Features</h3>
        <div className='flex gap-3'>
          
        <div className='flex  rounded h-30 bg-gray-100 cursor-pointer px-1 py-2 flex-col justify-center text-center'>
         <i className=" text-4xl ri-book-open-line"></i>
          <h3 className='text-sm w-30 '>Discover new recipes</h3>
        </div>
        <div className='flex rounded h-30 bg-gray-100 cursor-pointer px-1 py-2 flex-col justify-center text-center'>
         <i className=" text-4xl ri-book-open-line"></i>
          <h3 className='text-sm w-30 '>Discover new recipes</h3>
        </div>
        <div className='flex rounded h-30 bg-gray-100 cursor-pointer px-1 py-2 flex-col justify-center text-center'>
         <i className=" text-4xl ri-book-open-line"></i>
          <h3 className='text-sm w-30 '>Discover new recipes</h3>
        </div>

        </div>
      </div>
    </div>
  )
}

export default About