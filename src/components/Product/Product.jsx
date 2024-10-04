import React, { useState } from 'react';
import ProductCategory from './ProductPage/ProductCategory';
import ProductContext from './ProductPage/ProductContext';

const Product = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className='bg-white text-white w-full h-full'>
    
            <div className=' flex flex-row flex-wrap  w-full min-h-[100vh] '>

                    <ProductCategory setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                  <div className='py-6 w-[80%]   border-l  border-gray-400'>
                    <ProductContext selectedCategory={selectedCategory}  />
                  </div>
            </div>

    </div>
  )
}

export default Product