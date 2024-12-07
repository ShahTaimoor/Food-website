import React from 'react'

const CategoryMenu = () => {
  return (
    <section className='mx-6 mt-5'>
        <h3 className='text-xl text-gray-500 font-semibold'>Food Menu</h3>
           <div className='my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden'>
            <button className='bg-gray-400 font-bold px-5 hover:text-white duration-150 transition-all ease-in-out hover:bg-green-500 rounded-lg py-1.5'>
                All
            </button>
            <button className='bg-gray-400 font-bold px-5 hover:text-white duration-150 transition-all ease-in-out hover:bg-green-500 rounded-lg py-1.5'>
                BreakFast
            </button>
            <button className='bg-gray-400 font-bold px-5 hover:text-white duration-150 transition-all ease-in-out hover:bg-green-500 rounded-lg py-1.5'>
                Chicken
            </button>
            <button className='bg-gray-400 font-bold px-5 hover:text-white duration-150 transition-all ease-in-out hover:bg-green-500 rounded-lg py-1.5'>
                Lunch
            </button>
            
           </div>
    </section>
  )
}

export default CategoryMenu