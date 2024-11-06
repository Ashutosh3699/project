import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { removeCard } from '../../features/cartSlice';

const RenderCartCourse = () => {

    const {carts} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();


  return (
    <div className="flex flex-1 flex-col">
    
      {
        carts.map((product,index) => {

          return (<div key={index}
          className={`flex  flex-wrap items-start justify-between gap-6 w-[70%] ${
            index !== carts.length - 1 && "border-b border-b-gray-400 pb-6"
          } ${index !== 0 && "mt-6"} `}
          >

                <div className="flex flex-1 flex-col gap-4 xl:flex-row justify-between ">

                      <div className='flex  gap-4'>
                        <div className="h-[148px] w-[220px] rounded-lg overflow-hidden" >
                            <img  src={product?.thumbnail}  
                            alt={product?.productName}
                            className="h-[148px] w-[220px] rounded-lg object-cover" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <h3 className="text-xl font-medium text-gray-50">{product?.productName}</h3>
                            <p className="text-md text-gray-300">{product?.inStock}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-2  ">

                          <button
                          onClick={()=> dispatch(removeCard(product?._id))}
                           className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-3 px-[12px] text-pink-200"
                          >
                           <AiFillDelete /> <span>Remove</span>
                          </button>

                          <h5 className="mb-6 text-3xl font-medium text-yellow-100">
                            ₹ {product?.price * product?.selectQuantity} 
                          </h5>

                          <p className="mb-6 text-lg font-medium text-yellow-100"> Number of selected quantity: {product?.selectQuantity}</p>
                      </div>

                </div>

          </div>)
        })
      }
     
    </div>
  )
}

export default RenderCartCourse