import React, { useRef, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setSelecetedCategory } from '../../../features/CategorySlice';
import { useNavigate } from 'react-router-dom';
import useOutsideClick from '../../../customHook/useOutsideClick';
import { FaPlus } from "react-icons/fa6";


const ProductCategory = () => {


  // const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const {categoryList, selectedCategory} = useSelector((state)=>state.category);
  const [attributeclass,setattributeClass] = useState("invisible opacity-0");

  // console.log("category list is: ", categoryList);
  // console.log("selected category is: ", selectedCategory);
  const clickHandler=()=>{
    if(attributeclass === "invisible opacity-0"){
      setattributeClass("visible opacity-100");
    }
    else{
      setattributeClass("invisible opacity-0");
    }
  }

  const divref1 = useRef(null);
    const handleClickOutside1 = () => {
      // function to be added
      setattributeClass("invisible opacity-0");
    };
    useOutsideClick(divref1, handleClickOutside1);

  return (
    <div className=' w-[100%] lg:w-[20%]  h-[100%] py-6  shadow-inner  shadow-cyan-700'  ref={divref1}>

      <h3 className='text-4xl text-gray-300 select-none font-extrabold px-4 pb-2 flex gap-2 items-center' 
      
     >Store  
      <FaPlus className='flex  lg:hidden' onClick={clickHandler}   />
      </h3>
      {
         <div className='hidden lg:block'>

          {
            categoryList.length===0 ? <div>No category present here</div>  : <div>
              {
                categoryList.map((element,index)=>(
                  <details  key={index} className='w-full h-full cursor-pointer select-none text-center flex flex-col items-center ' >

                  <summary className='flex justify-between items-center border bg-cyan-700 
                      border-gray-500  px-5 py-2 border-b-4 border-b-gray-200  w-full ' 
                      >
                      <div className='flex justify-between items-center gap-x-3 '>
                          <FaChevronUp className={`${element._id ? (" rotate-180"): ("rotate-0")} text-xl text-richblack-50`}/>
                          <p className="font-semibold text-richblack-50 ">{element?.categoryName}</p>
                      </div>
                  </summary>

                  <div className=' xl:w-[280px]  lg:w-[200px]'>
                      {
                        element?.subCategory?.map((tag,index)=>(
                          <div  key={index} className={` ${selectedCategory === tag._id ? "bg-gray-800": " bg-yellow-800"}
                          hover:text-blue-color  cursor-pointer py-1 items-start  transition-all duration-300
                          gap-x-4  flex justify-start px-4 border border-yellow-950 w-full` }
                            onClick={()=>{
                              dispatch(setSelecetedCategory(tag._id));
                              navigate(`/product/${tag._id}`)
                            }}
                          >
                            <FaAngleRight className={`${selectedCategory === tag._id ? "text-yellow-800": " text-yellow-800"}`}/>
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

      {
         <div  className={`${attributeclass}  
         w-[80%] absolute bg-gray-800 top-[23%] left-0 z-10 transition-all duration-300 py-3 ml-3  rounded-md `}  >


          {
            categoryList.length===0 ? <div>No category present here</div>  : <div>
              {
                categoryList.map((element,index)=>(
                  <details  key={index} className='w-full cursor-pointer select-none text-center flex flex-col items-center ' >

                  <summary className='flex justify-between items-center border bg-cyan-700 
                      border-gray-500  px-5 py-2 border-b-4 border-b-gray-200  w-full ' 
                      >
                      <div className='flex justify-between items-center gap-x-3 '>
                          <FaChevronUp className={`${element._id ? (" rotate-180"): ("rotate-0")} text-xl text-richblack-50`}/>
                          <p className="font-semibold text-richblack-50 ">{element?.categoryName}</p>
                      </div>
                  </summary>

                  <div className=' w-[250px] '>
                      {
                        element?.subCategory?.map((tag,index)=>(
                          <div  key={index} className={`w-full ${selectedCategory === tag._id ? "bg-gray-800": " bg-yellow-800"}
                          hover:text-blue-color  cursor-pointer py-1 items-center  transition-all duration-300
                          gap-x-4  flex justify-start px-4 border border-yellow-950` }
                            onClick={()=>{
                              dispatch(setSelecetedCategory(tag._id));
                              navigate(`/product/${tag._id}`)
                            }}
                          >
                            <FaAngleRight className={`${selectedCategory === tag._id ? "text-yellow-800": " text-yellow-800"}`}/>
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