import { IoMdClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import ItemsCard from "./ItemsCard";
const Cart = () => {

  const [open, setOpen] = useState(false)


  return (
    <>

      <div className="fixed right-5 text-3xl bottom-4">
        <p className="text-sm absolute  -right-3 -top-3 bg-red-600 text-white px-2 rounded-full">0</p>
        <CiShoppingCart className=" text-3xl" onClick={() => setOpen(true)} />
      </div>
      {
        open &&

        <section
  
        className='bg-white fixed  top-0 right-0 w-[20vw] h-full'>
          <div className="flex mt-4 items-center justify-between px-4  ">
            <h2 className="font-medium">My Orders</h2>
            <IoMdClose onClick={() => setOpen(false)} className=" cursor-pointer" />
          </div>
          <ItemsCard/>
        </section>
      }



    </>
  )
}

export default Cart