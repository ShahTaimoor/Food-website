import React from 'react'
import { FaPlus } from "react-icons/fa6";
const ItemsCard = () => {
    return (
        <section className='mt-5 mx-6'>
            <div className='border-2 border-gray-300 rounded-xl p-2'>
                <div className=' gap-3 overflow-hidden flex'>
                    <img className='w-20' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
                    <div>
                        <h3>Onion Pizza</h3>
                        <p>$150</p>
                    </div>
                </div>
                <div>
                    <FaPlus />
                    <p>0</p>
                </div>
            </div>
        </section>
    )
}

export default ItemsCard