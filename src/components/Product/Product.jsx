import React from 'react';
import ProductCategory from './ProductPage/ProductCategory';
import { Outlet } from 'react-router-dom';


const Product = () => {

  return (
    <div className='bg-white text-white w-full h-full'>
    
              <div className=' flex flex-row flex-wrap  w-full min-h-[100vh] '>

                  <ProductCategory  />
                  <div className='py-6 w-[80%]   border-l  border-gray-400'>
                  <Outlet/>
                  </div>
              </div>

    </div>
  )
}

export default Product