import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourse from '../RenderCartCourse';
import RenderTotalAmount from '../RenderTotalAmount';

const AddItem = () => {

  const {carts, total, totalItems} = useSelector((state)=>state.cart);
  
  console.log("carts is: ", carts);
  console.log("total is: ", total);
  console.log("totalItems is: ", totalItems);


  return (
    <div className='w-full  flex flex-col gap-10  bg-white'>

      <div className='flex flex-col gap-4 w-[80%] mx-auto'> 
          <h2 className='text-3xl text-gray-700 font-semibold'>My Wishlist</h2>
          <p className='text-lg font-medium text-gray-800 '>{totalItems} Products in cart</p>
      </div>

      {
          total > 0 ? (
              <div className="my-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row w-[80%] mx-auto">
                  <RenderCartCourse/>
                  <RenderTotalAmount/>
              </div>
          ) : (
              <h3 className=' px-10 py-10  text-gray-500 text-4xl font-bold w-[80%] mx-auto'>No Products in the cart</h3>
          )
      }

  </div>
  )
}

export default AddItem