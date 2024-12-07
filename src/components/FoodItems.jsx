import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import { useSelector } from 'react-redux'

const FoodItems = () => {

    const category = useSelector((state) => state.category.category)
    const search = useSelector((state) => state.search.search)
    return (
        <div className='flex flex-wrap'>

            {
                FoodData.filter((item) => {
                    if (category === 'All') {
                        return item.name.toLowerCase().includes(search.toLowerCase())
                    }
                    else {
                        return item.category === category && item.name.toLowerCase().includes(search.toLowerCase())
                    }

                }).map((item) => (
                    <FoodCard key={item.id}
                        id={item.id}
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