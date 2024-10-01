import React from 'react';
import ProductCategory from './ProductPage/ProductCategory';
import ProductContext from './ProductPage/ProductContext';

const Product = () => {


  return (
    <div className='bg-regal-blue py-16 px-10 text-white'>
    
            <div className=' flex flex-row flex-wrap gap-x-8 gap-y-4 p-4'>

                <div>
                    <ProductCategory/>
                </div>
                <div>
                    <ProductContext/>
                </div>
                
            </div>

    </div>
  )
}

export default Product