import React from 'react'


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center mx-6 mt-3 '>
            <div>
                <h3 className='text-xl'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-gray-500 font-bold text-3xl'>Ecomerce Food App</h1>
            </div>
            <div>
                <input className='p-3 border rounded-lg w-full md:w-[300px]' type="search" name='search' placeholder='Search Here' />
            </div>
        </nav>
    )
}

export default Navbar