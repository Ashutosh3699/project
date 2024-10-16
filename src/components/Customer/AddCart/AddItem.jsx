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
    <div className='w-full  flex flex-col gap-10'>

      <div className='flex flex-col gap-4'> 
          <h2 className='text-3xl text-richblack-50 font-semibold'>My Wishlist</h2>
          <p className='text-lg font-medium text-richblack-200 '>{totalItems} courses in cart</p>
      </div>

      {
          total > 0 ? (
              <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
                  <RenderCartCourse/>
                  <RenderTotalAmount/>
              </div>
          ) : (
              <h3 className='w-full px-10  text-richblack-25 text-2xl font-extrabold'>No courses in the cart</h3>
          )
      }

  </div>
  )
}

export default AddItem