import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCategories } from '../../../services/operations/categoryApi';
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const ProductCategory = ({setSelectedCategory, selectedCategory}) => {

  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{

    const fetchCategory =async()=>{

      setLoading(true);
      const response = await getAllCategories();
      console.log("response is category: ", response);

      if(response){
        setCategoryList(response);
        setSelectedCategory(response[0].subCategory[0]._id);
      }
      setLoading(false);
    }

    fetchCategory();
  },[]);



  return (
    <div className='w-[20%]  h-[100%] py-6'>

      <h3 className='text-4xl text-gray-300 select-none font-extrabold px-4 pb-2'>Store</h3>
      {
        loading ? <h2>loading....</h2> : <div>

          {
            categoryList.length===0 ? <div>No category present here</div>  : <div>
              {
                categoryList.map((element,index)=>(
                  <details  key={index} className='w-full text-center flex flex-row items-center ' >

                  <summary className='flex justify-between items-center border bg-gray-700 
                      border-gray-500  px-5 py-2 border-b-4 border-b-gray-200  w-full '>
                      <div className='flex justify-between items-center gap-x-3 '>
                          <FaChevronUp className={`${open ? (" rotate-180"): ("rotate-180")} text-xl text-richblack-50`}/>
                          <p className="font-semibold text-richblack-50 ">{element?.categoryName}</p>
                      </div>
                  </summary>

                  <div>
                      {
                        element?.subCategory?.map((tag,index)=>(
                          <div  key={index} className={`w-full ${selectedCategory === tag._id ? "bg-gray-800": " bg-gray-600"} py-1 items-center 
                          gap-x-4  flex justify-start px-4`}
                            onClick={()=>setSelectedCategory(tag._id)}
                          >
                            <FaAngleRight/>
                              <h4>{tag.TagName}</h4>
                          </div>
                        ))
                      }
                  </div>
                  </details>
                ))
              }
            </div>
          }
        </div>
      }
    
    </div>
  )
}

export default ProductCategory