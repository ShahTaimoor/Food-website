import { IoMdClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import ItemsCard from "./ItemsCard";
import { useSelector } from "react-redux";

const Cart = () => {

  const [open, setOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.cart)


  return (
    <>

      <div className="fixed right-5 text-3xl bottom-4">
        <p className="text-sm absolute  -right-3 -top-3 bg-red-600 text-white px-2 rounded-full">{cartItems.length}</p>
        <CiShoppingCart className={`text-3xl cursor-pointer `} onClick={() => setOpen(true)} />
      </div>
      {
        <section
          className={`bg-white fixed transition-all duration-200 ease-out  top-0 right-0 w-[20vw] h-full ${open ? 'translate-x-0' : 'translate-x-full'}  `}>
          <div className="flex mt-4 items-center justify-between px-4  ">
            <h2 className="font-medium">My Orders</h2>
            <IoMdClose onClick={() => setOpen(false)} className=" cursor-pointer" />
          </div>
          <div className="overflow-y-scroll">
            {
              cartItems.map((item) => (
                <ItemsCard key={item.id} id={item.id} quantity={item.quantity} name={item.name} price={item.price} img={item.img} />
              ))
            }

          </div>


          <div className="absolute bottom-4 left-4 space-y-4">
            <h3>Items: {cartItems.length}</h3>
            <div className="flex gap-4">
              <h4>Total Amount:</h4>
              <p className="font-semibold text-red-500">{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}</p>
            </div>
            <button className='bg-[#FED700] w-[90vw] lg:w-[18vw] hover:bg-black hover:text-white  rounded-xl transition-all ease-in-out duration-100  px-3 py-2'>Checkout</button>
          </div>
        </section>
      }



    </>
  )
}

export default Cart