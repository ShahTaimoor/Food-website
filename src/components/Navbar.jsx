import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSearch } from '../store/slice/SearchSlice'


const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <nav className='flex justify-between flex-col lg:flex-row  mx-6 space-y-3 mt-3 '>
            <div>
                <h3 className='text-xl'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-gray-500 font-bold text-3xl'>Ecomerce Food App</h1>
            </div>
            <div>
                <input
                    onChange={(e) => dispatch(changeSearch(e.target.value))}
                    className='p-3 border rounded-lg w-full lg:w-[300px] outline-none' type="search" name='search' placeholder='Search Here' />
            </div>
        </nav>
    )
}

export default Navbar