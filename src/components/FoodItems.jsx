import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'

const FoodItems = () => {
    return (
        <div className='flex flex-wrap'>
            {
                FoodData.map((item) => (
                    <FoodCard key={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}


                    />

                ))
            }
        </div>
    )
}

export default FoodItems