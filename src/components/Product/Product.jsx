import React from 'react';
import ProductCategory from './ProductPage/ProductCategory';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ACCOUNT_TYPE } from '../../utils/constant';


const Product = () => {

  const {user} = useSelector((state)=>state.profile);
  const navigate = useNavigate();

  if(user.accountType===ACCOUNT_TYPE.CLIENT){
    return navigate("/");
  }

  return (
    <div className='bg-white text-white w-full h-full'>
    
              <div className=' flex flex-row flex-wrap  w-full  '>

                  <ProductCategory  />
                  <div className='py-6 w-[100%] lg:w-[80%]   border-l  border-gray-400'>
                  <Outlet/>
                  </div>
              </div>

    </div>
  )
}

export default Product