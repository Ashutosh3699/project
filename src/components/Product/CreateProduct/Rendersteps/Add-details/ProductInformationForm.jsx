import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {getAllCategories} from "../../../../../services/operations/categoryApi";
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import ProductImage from '../ProductImage';
import ProductInstruction from './ProductInstruction';
import { setEditProduct, setProduct, setStep } from '../../../../../features/productSlice';
import { addProductDetails, updateProductDetails } from '../../../../../services/operations/productApi';
import toast from 'react-hot-toast';

const ProductInformationForm = () => {

    const [loading,setLoading]= useState(true);
    const {productId} = useParams();
    const {token} = useSelector((state)=>state.auth);
    const [showCategory, setShowCategory] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {product, editProduct}  = useSelector((state)=>state.product);

    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue,
        getValues
    } = useForm();

    useEffect(()=>{

        const fetchAllCategory = async()=>{
            setLoading(true);
            const res = await getAllCategories();

            if(res){
                setShowCategory(res);
            }
            setLoading(false);
        };

        fetchAllCategory();
       

        if(editProduct){
            setValue("productName",product.productName);
            setValue("productDetail",product.productDetail);
            setValue("productImage",product.thumbnail);
            setValue("productTags",product.tags);
            setValue("productInstructions", product.instructions);
            setValue("productBenefit",product.whatWeWillget);
            setValue("Price", product.price);

        }

    },[]);
    // console.log("categories are: ", showCategory);

    const isFormUpdated=()=>{

        const currentProduct = getValues();

        if(product.productName !== currentProduct.productName ||
            product.productDetail !== currentProduct.productDetail ||
            product.price !== currentProduct.Price ||
            product.thumbnail !== currentProduct.productImage ||
            product.tags !== currentProduct.productTags ||
            product.whatWeWillget !== currentProduct.productBenefit ||
            product.instructions.toString() !== currentProduct.productInstructions.toString()
        ){
            return true;
        }
        else{
            return false;
        }
    };
// edit is left
    const  onSubmit= async(data)=>{
        console.log("data is: ", data);
        if(editProduct){  // edit course from course slice will be true after the first save of the course

            if(isFormUpdated()){
    
                const currentProduct = getValues();
                const formData = new FormData();
                console.log("currentProduct", currentProduct);
                formData.append("productId", product._id);
                if(currentProduct.productName !== product.productName){
                    formData.append("productName", data.productName);
                }
                if(currentProduct.productDetail !== product.productDetail){
                    formData.append("productDetail", data.productDetail);
                }
                if(currentProduct.Price !== product.price){
                    formData.append("price", data.Price);
                }
                if(currentProduct.productTags !== product.tags._id){
                    formData.append("tags", data.productTags);
                }
                if(currentProduct.productBenefit !== product.whatWeWillget){
                    formData.append("whatWeWillget", data.productBenefit);
                }
                if(currentProduct.productImage !== product.thumbnail){
                    formData.append("thumbnail", data.productImage);
                }
                if(currentProduct.productInstructions.toString() !== product.instructions.toString()){
                    formData.append("instructions", JSON.stringify(data.productInstructions));
                }
    
                setLoading(true);
                const result = await updateProductDetails(formData, token);
                console.log(" result is after edit is: ", result);
                setLoading(false);
                if(result){
                    console.log("inside the result is: ", result);
                    dispatch(setStep(2));
                    dispatch(setProduct(result));
                }
                
            }
            else{
                toast.success("No change made");
            }

            return ;
          }
    
          const formData = new FormData();
    
          formData.append("productName", data.productName);
          formData.append("productDetail", data.productDetail);
          formData.append("price", data.Price);
          formData.append("tags", data.productTags);
          formData.append("whatWeWillget", data.productBenefit);
          formData.append("thumbnail", data.productImage);
          formData.append("instructions", JSON.stringify(data.productInstructions));
    
          setLoading(true);
        //   console.log("BEFORE add course API call");
        //   console.log("PRINTING FORMDATA", formData.entries());
          const result = await addProductDetails(formData,token);
          setLoading(false);
            if(result) {
                // console.log("changes at step section");
                dispatch( setStep(2));
                dispatch(setEditProduct(true));
                dispatch(setProduct(result));
            }
           
            // console.log("PRINTING FORMDATA", );
            // console.log("PRINTING result", result);
    }


  return (
    <form className="space-y-8 rounded-md border-[1px] border-gray-700 bg-gray-800 p-6"
    onSubmit={handleSubmit(onSubmit)}
    >
            {/* product title */}
        <label className="flex flex-col space-y-2">
            <div className='text-md text-gray-50 font-semibold'>
                Product Title <sup className=" text-red-600">*</sup>
            </div>
            <input
                id='productName'
                type='text'
                name='productName'
                placeholder='Enter Product Name'
                className='lg:w-[70%] bg-gray-800 text-gray-50 border border-gray-700 rounded-lg py-1 px-2 text-lg  font-medium'
                {...register("productName", {required:true})}
            />
            {errors.productName && <p  className="ml-2 text-xs tracking-wide  text-red-600">productName is required.</p>}
        </label>

            {/* product Details */}
            <label className="flex flex-col space-y-2">
            <div className='text-md text-gray-50 font-semibold'>
                Product Description <sup className=" text-red-600">*</sup>
            </div>
            <textarea
                id='productDetail'
                name='productDetail'
                placeholder='Enter Product Description'
                className='lg:min-w-[70%]  h-[120px] bg-gray-800 text-gray-50 border border-gray-700 rounded-lg py-1 px-2 text-lg  font-medium'
                {...register("productDetail")}
            />
            {errors.productDetail && <p className="ml-2 text-xs tracking-wide  text-red-600">courseDescription is required.</p>}
        </label>

        {/* product price */}
        <label className="flex flex-col space-y-2">
            <div className='text-md text-gray-50 font-semibold'>
                Price <sup className="text-red-600">*</sup>
            </div>
            <div className="relative" >
                <input
                    id='Price'
                    type='text'
                    name='Price'
                    className='lg:w-[70%] bg-gray-800 border text-gray-50  border-gray-700 rounded-lg py-1 px-16 text-lg  font-medium'
                    placeholder='Enter Course Price'
                    {...register("Price", {
                        valueAsNumber:true,
                        pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                        },
                    })}
                />
                {/* rupee icon */}
                <RiMoneyRupeeCircleLine className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-gray-400" />
            </div>
            {errors.Price && <p className="ml-2 text-xs tracking-wide text-red-600">Price is required.</p>}
        </label>

        {/* product tags */}
        <div className="flex flex-col space-y-2">
        <label className='text-md text-gray-50 font-semibold'
                     htmlFor="category">Product Category<sup className="text-red-600">*</sup></label>

            <select 
            id="productTags"
            defaultValue=""
            {...register("productTags")}
            className="lg:w-[70%] bg-gray-800 border text-gray-50 border-gray-700 rounded-lg py-1 px-2 text-lg font-medium"
            >
                <option value=""  disabled>Choose a Category</option>
                {
                   loading ? (<option>loading</option>) : (
                   showCategory.map((category, index) => (
                            <optgroup key={index} value={category?._id} >
                                <option disabled> {category?.categoryName}</option>
                                    {
                                        category?.subCategory?.map((tag,index)=>(
                                            <option key={index} value={tag?._id}>
                                                {tag?.TagName}
                                            </option>
                                        ))
                                    }
                            </optgroup>
                            )))
                }
            </select>
            {errors.productTags && (
                            <span className="ml-2 text-xs tracking-wide text-pink-200">Course Category is Required</span>
                        )}
        
        </div>

        {/* image using common component */}
        <ProductImage
              name="productImage"
                label="Product Thumbnail"
                register={register}
                setValue={setValue}
                errors={errors}
                editData={editProduct ? product?.thumbnail : null}
        />

        {/* products benefits */}
        <label className="flex flex-col space-y-2">
            <div className='text-md text-gray-50 font-semibold' >
                Benefits of products <sup className="text-red-600">*</sup>
                </div>
                <textarea
                    id='productBenefit'
                    type='text'
                    className='lg:w-[70%] h-[120px] bg-gray-800 text-gray-50 border resize-x-none min-h-[130px] w-full border-gray-700 rounded-lg py-1 px-2 text-lg  font-medium'
                    name='productBenefit'
                    placeholder="Enter benefits of the product"
                    {...register("productBenefit")}
                />
                {errors.productBenefit && <p className="ml-2 text-xs tracking-wide text-red-600">courseBenefits is required.</p>}
        </label>

        {/* requirements/ instructions */}


        {/* buttons countinue without saving & save change || next */}

        <div className="flex justify-end gap-x-2">

                  {
                    editProduct && (
                        <button 
                            onClick={()=>{dispatch(setStep(2))}}
                         disabled={loading}
                         className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 py-[8px] px-[20px] font-semibold text-gray-900`}
                        >
                        countinue without saving
                        </button>
                    )
                  }
                 
                 <button
                 disabled={loading}
                 className={" bg-yellow-300   flex cursor-pointer items-center gap-x-2 rounded-md text-gray-800 py-[8px] px-[20px] font-semibold  "}
                 >
                 {!editProduct ? ("next") : ("save change")}
                 </button>
            </div>

        </form>
  )
}


export default ProductInformationForm