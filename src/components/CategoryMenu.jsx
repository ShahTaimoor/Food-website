import { useEffect, useState } from "react"
import FoodData from "../data/FoodData"
import { useDispatch, useSelector } from "react-redux"
import { changeCategory } from '../store/slice/CategorySlice'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    const selectCategory = useSelector(state => state.category.category)
    const listCategory = () => {
        const uniqueCategories = [...new Set(FoodData.map(item => item.category))]
        setCategories(uniqueCategories)
        console.log(uniqueCategories);

    }
    useEffect(() => {
        listCategory()
    }, [])
    const dispatch = useDispatch()
    return (
        <section className='mx-6 mt-5'>
            <h3 className='text-xl text-gray-500 font-semibold'>Food Menu</h3>
            <div className='my-5 flex gap-3 overflow-x-scroll lg:overflow-x-hidden'>
                <button
                    onClick={() => dispatch(changeCategory('All'))}
                    className={`bg-gray-400 font-bold px-5 hover:text-white duration-150 transition-all ease-in-out hover:bg-green-500 rounded-lg py-1.5 ${selectCategory === 'All' && 'bg-green-500 text-white'}`}>
                    All
                </button>
                {
                    categories.map((item, index) => (
                        <button
                            key={index} // Use a unique key, such as index or a unique identifier
                            onClick={() => dispatch(changeCategory(item))}
                            className={` ${selectCategory === item && 'bg-green-500 text-white'} bg-gray-400 font-bold px-5 hover:text-white duration-150 transition-all ease-in-out hover:bg-green-500 rounded-lg py-1.5`}>
                            {item}
                        </button>
                    ))

                }

            </div>
        </section>
    )
}

export default CategoryMenu