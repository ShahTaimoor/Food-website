import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
const ItemsCard = () => {
    return (
        <section className='mt-5 mx-4'>
            <div className='border-2 border-gray-300 rounded-xl p-2'>
                <div className=' gap-3 relative overflow-hidden flex'>
                    <img className='w-20' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
                    <div>
                        <h3>Onion Pizza</h3>
                        <p>$150</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <FaPlus className='border-2 rounded-2xl hover:bg-[#FED700] hover:text-white cursor-pointer' />
                                <p>0</p>
                                <FaMinus className='border-2 rounded-2xl hover:bg-[red] hover:text-white cursor-pointer' />
                            </div>
                            <AiFillDelete className='absolute right-0 hover:text-[red]  cursor-pointer' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ItemsCard