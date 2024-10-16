import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetProductState, setStep } from '../../../../features/productSlice';
import { useForm } from 'react-hook-form';
import { PRODUCT_STATUS } from '../../../../utils/constant';
import toast from 'react-hot-toast';
import { updateProductDetails } from '../../../../services/operations/productApi';

const ProductPublish = () => {

    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth);
    const {product, editProduct}  = useSelector((state)=>state.product);
    const [loading, setLoading] = useState(false);
    const {
      register,
      handleSubmit,
      formState:{errors},
      setValue,
      getValues
    } = useForm();

    // console.log("product is: ", product);

    useEffect(()=>{

      if(editProduct){
          setValue("quantity", product.quantity);
          setValue("stock", product.inStock);
      }
    },[])

    const isFormUpdated=()=>{

      const currentProduct = getValues();

      if(product.quantity !== currentProduct.quantity ||
          product.inStock !== currentProduct.stock 
      ){
          return true;
      }
      else{
          return false;
      }
  };

  const  onsubmit= async(data)=>{
    // console.log("data is: ", data);
    if(editProduct){  // edit course from course slice will be true after the first save of the course

        if(isFormUpdated()){

            const currentProduct = getValues();
            const formData = new FormData();

            formData.append("productId", product._id);
            if(currentProduct.quantity !== product.quantity){
                formData.append("quantity", data.quantity);
            }
            if(currentProduct.stock !== product.inStock){
                formData.append("inStock", data.stock);
            }
           
            setLoading(true);
            const result = await updateProductDetails(formData, token);
            console.log(" result is after--->>> edit is: ", result);
            setLoading(false);
            goAndSubmit();
        }
        else{
            toast("No changes made yet");
        }
        // navigate("/dashboard/my-courses");
        return ;
      }

      const formData = new FormData();

      formData.append("productName", data.productName);
      formData.append("productDetail", data.productDetail);
      setLoading(true);

      setLoading(true);
      const result = await updateProductDetails(formData, token);
      console.log(" result is not -->>> edit is: ", result);
      setLoading(false);
      goAndSubmit();
}

    

    const goBack=()=>{
        dispatch(setStep(2));
    }

    const goAndSubmit=()=>{
        
        dispatch(resetProductState());
    }


  return (
    <div className='p-6 bg-gray-800 border border-gray-700 rounded-md text-gray-50 flex flex-col gap-4'>
        <p>Publish Course</p>

        <form onSubmit={handleSubmit(onsubmit)}  className='flex flex-row gap-3 w-full  items-center'>
                  {/* product quantity */}
                  <label className="flex flex-col space-y-2">
                      <div className='text-md text-gray-50 font-semibold'>
                          Product Quantity <sup className=" text-red-600">*</sup>
                      </div>
                      <input
                          id='quantity'
                          type='number'
                          name='quantity'
                          placeholder='Enter Product quantity'
                          className='lg:w-[70%] bg-gray-800 text-gray-50 border border-gray-700 rounded-lg py-1 px-2 text-lg  font-medium'
                          {...register("quantity", {required:true})}
                      />
                      {errors.quantity && <p  className="ml-2 text-xs tracking-wide  text-red-600">quantity is required.</p>}
                  </label>

                  <div className="flex flex-col space-y-2">
                    <label className='text-md text-gray-50 font-semibold'
                                htmlFor="stock">Product Category<sup className="text-red-600">*</sup></label>

                        <select 
                        id="stock"
                        defaultValue=""
                        {...register("stock",{
                            required:true
                        })}
                        className="lg:w-[70%] bg-gray-800 border text-gray-50 border-gray-700 rounded-lg py-1 px-2 text-lg font-medium"
                        >
                            <option value=""  disabled>Choose a Category</option>
                              <option value={PRODUCT_STATUS.DRAFT}>
                                in-stock
                              </option>
                              <option value={PRODUCT_STATUS.PUBLISHED}>
                                out-of-stock
                              </option>
                                                  
                        </select>
                        {errors.stock && (
                                        <span className="ml-2 text-xs tracking-wide text-pink-200">Course Category is Required</span>
                                    )}
                    
                    </div>

                    <button 
                      type='submit'
                      disabled={loading}
                      className='px-4 py-2 bg-yellow-300 text-black rounded-lg '
                    >
                       {
                          loading ? "loading" : "save change"
                       }
                    </button>
        </form>

        <div className='flex gap-x-4 items-center '>

                    <button
                    type='button'
                    disabled={loading}
                    className='text-md text-gray-50  bg-gray-500 px-4 py-1'
                    onClick={goBack}
                    >
                        Back
                    </button>
            </div>

    </div>
  )
}

export default ProductPublish