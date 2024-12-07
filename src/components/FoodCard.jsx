import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slice/CartSlice'

const FoodCard = ({ id, name, price, img }) => {


    const dispatch = useDispatch()

    return (
        <section className='mx-6  mt-5  '>
            <div className=' bg-white p-2 w-[250px]  rounded-xl '>
                <img
                    className='w-full rounded-xl mx-auto h-[130px]'
                    src={img} alt=""
                />
                <div className='flex mt-4 font-medium text-sm justify-between'>
                    <h3>{name.slice(0, 20)}</h3>
                    <p>{price}$</p>
                </div>
                <div className='pb-4 mt-4  flex font-medium justify-between'>
                    <button className='bg-black  rounded-xl transition-all ease-in-out duration-100 hover:bg-[#FED700] hover:text-black  text-white px-3 py-2'>View Details</button>
                    <button className='bg-[#FED700] hover:bg-black hover:text-white  rounded-xl transition-all ease-in-out duration-100  px-3 py-2' onClick={() => dispatch(addToCart({ id, name, price, img }))}>Add To Cart</button>
                </div>
            </div>
        </section>
    )
}

export default FoodCard