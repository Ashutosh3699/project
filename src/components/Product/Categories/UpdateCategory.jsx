import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { getAllCategories, updateCategory } from '../../../services/operations/categoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../../features/CategorySlice';

const UpdateCategory = () => {

    const [loading, setLoading] = useState(true);
    const {category} = useSelector((state)=>state.category);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const {
        register,
        formState: {errors},
        setValue,
        handleSubmit
    } = useForm();

    useEffect(()=>{
          // fetch the category and load it inside categoryList
        const fetchCategory=async()=>{
            setLoading(true);
            const res = await getAllCategories();
            console.log("res is: ", res);
            if(res){
                dispatch(addCategory(res));
            }
            setLoading(false);
        }

        fetchCategory();
    },[]);

    const onsubmit= async(data)=>{

        // console.log("data is:", data);
        const response = await updateCategory(token,data);
        if(response){
            console.log("response is: ", response);
            dispatch(addCategory(response));
        }
        
        setValue("categoryId", "");
        setValue("tagName", "");
    }

  return (
    <div className='py-3 px-6 border border-gray-500 rounded-lg flex flex-col gap-4 w-[70%] mx-auto'>

        <h2 className='text-2xl text-gray-300 '>Update Category</h2>
    
         <form  onSubmit={handleSubmit(onsubmit)} 
         className='flex flex-col gap-8 items-center '
         >
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col gap-2 items-center'>
                            <label  htmlFor='category'>Category</label>

                            <select
                            id="category"
                            defaultValue=""
                            {...register("categoryId", { required: true })}
                            className='text-lg bg-gray-900  text-gray-100'
                            >
                                <option value=""  disabled>Choose a Category</option>
                                {!loading && category.map((category, index) => (
                                <option key={index} value={category?._id} >
                                    {category?.categoryName}
                                </option>
                                ))}
                            </select>
                            {errors.category && (<span>please enter a category</span>)}
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                            <label  htmlFor='tag'>Tag</label>
                            <input
                                id='tag'
                                type='text'
                                {...register("tagName",{required:true})}
                                className='text-lg bg-gray-900  text-gray-100'
                            />
                            {errors.tag && (<span>please enter a tag</span>)}
                    </div>
                </div>

                <button className='py-1 w-[60%] bg-yellow-300 rounded-md text-gray-800'>
                    save
                </button>
        </form>

    
    </div>
  )
}

export default UpdateCategory