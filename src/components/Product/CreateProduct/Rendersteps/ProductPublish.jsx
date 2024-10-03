import React from 'react'
import { useDispatch } from 'react-redux';
import { resetProductState, setStep } from '../../../../features/productSlice';

const ProductPublish = () => {

    const dispatch = useDispatch();
    

    const goBack=()=>{
        dispatch(setStep(2));
    }

    const goAndSubmit=()=>{
        
        dispatch(resetProductState());
    }


  return (
    <div className='p-6 bg-gray-800 border border-gray-700 rounded-md text-gray-50 flex flex-col gap-4'>
        <p>Publish Course</p>


        <div className='flex gap-x-4 items-center '>

                    <button
                    type='button'
                    className='text-md text-gray-50  bg-gray-500 px-4 py-1'
                    onClick={goBack}
                    >
                        Back
                    </button>

                    <button  type='submit' 
                    onClick={goAndSubmit}
                    className='px-4 py-2 bg-yellow-300 text-black rounded-lg'>
                            save changes
                    </button>
            </div>

    </div>
  )
}

export default ProductPublish