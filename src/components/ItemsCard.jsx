import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/slice/CartSlice';
import { increementQty, decreementQty } from '../store/slice/CartSlice';


const ItemsCard = ({ id, name, price, img, quantity }) => {
    const dispatch = useDispatch()


    return (
        <section className='mt-5 mx-4'>
            <div className='border-2 border-gray-300 rounded-xl p-2'>
                <div className=' gap-3 relative overflow-hidden flex'>
                    <img className='w-20' src={img} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <p>${price * quantity}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <FaPlus onClick={() => dispatch(increementQty({id}))} onc className='border-2 rounded-2xl hover:bg-[#FED700] hover:text-white cursor-pointer' />
                                <p>{quantity}</p>
                                <FaMinus onClick={() => quantity > 1 ?  dispatch(decreementQty({id})) : (quantity = 0)} className='border-2 rounded-2xl hover:bg-[red] hover:text-white cursor-pointer' />
                            </div>
                            <AiFillDelete onClick={() => dispatch(removeItem(id, name, img, price))} className='absolute right-0 hover:text-[red]  cursor-pointer' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ItemsCard