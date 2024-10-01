import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../../services/operations/categoryApi';
import { addCategory } from '../../../features/CategorySlice';

export const AddCategory = () => {

    const [confirmModal, setConfirmModal] = useState(null);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const {
        register,
        formState: {errors},
        setValue,
        handleSubmit
    } = useForm();

    const onsubmit=async(data)=>{

        console.log("data is:", data);
        const response = await createCategory(token,data);

        if(response){
            console.log("response is: ", response);
            dispatch(addCategory(response));
        }
        setValue("categoryName", "");
        setValue("tagName", "");
    }


  return (
    <div className='py-3 px-6 border border-gray-500 rounded-lg flex flex-col gap-4 w-[50%] mx-auto'>

        <h2 className='text-2xl text-gray-300 '>New Category</h2>

        <form  onSubmit={handleSubmit(onsubmit)}
        className='flex flex-col gap-4 items-center '
        >
                
               <div className='flex flex-row gap-4'>

                    <div className='flex flex-col gap-2 items-center' >
                                <label  htmlFor='categoryName'>Category</label>
                                <input
                                    id='categoryName'
                                    type='text'
                                    className='text-lg bg-gray-900  text-gray-100'
                                    {...register("categoryName",{required:true})}
                                />
                                {errors.category && (<span>please enter a category</span>)}
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                                <label  htmlFor='tag'>Tag</label>
                                <input
                                    id='tag'
                                    type='text'
                                    className='text-lg bg-gray-900  text-gray-100'
                                    {...register("tagName",{required:true})}
                                />
                                {errors.tagName && (<span>please enter a tag</span>)}
                        </div>
               </div>

                <button className='py-1 w-[60%] bg-yellow-300 rounded-md text-gray-800'>
                    save
                </button>
        </form>

    
    </div>
  )
}
