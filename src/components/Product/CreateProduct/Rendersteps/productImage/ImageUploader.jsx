import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ProductImage from '../ProductImage';
import { createProductImage, updateProductImage } from '../../../../../services/operations/productApi';
import { RxCross2 } from 'react-icons/rx';
import { setProduct } from '../../../../../features/productSlice';
import toast from 'react-hot-toast';

const ImageUploader = ({
    modalData,
    setModalData,
    add=false,
    view= false,
    edit=false
}) => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue,
        getValues
    } = useForm();

    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth);
    const {product} = useSelector((state)=>state.product);

    useEffect(()=>{
        console.log("modal data is: ", modalData);
        if( view || edit){
            setValue("title", modalData.title);
            setValue("image", modalData.image);
        }
    },[])

    const isFormUpdated= ()=>{

        const currentValue = getValues();

        if(currentValue.title !== modalData.title ||
            currentValue.image !== modalData.image
        ){
            return true;
        }
        else{
            return false;
        }
    }

    const handleEditSubSection= async()=>{

        const currentValue = getValues();
        const formData = new FormData();

        formData.append("productImageId", modalData._id);

        if(currentValue.title !== modalData.title){
            formData.append("title",currentValue.title );
        }
        if(currentValue.image !== modalData.image){
            formData.append("image",currentValue.image );
        }

        setLoading(true);
        const result = await updateProductImage(formData,token);

        if(result){

            const updatedSection = product.image.map((image)=>
            image._id === modalData.image._id ? result : image);

            const updatedProduct = {...product, image:updatedSection};
            dispatch(setProduct(updatedProduct));
        }

        setModalData(null);
        setLoading(false);

    }

    const onsubmit = async(data)=>{
        
        if(view){
            return;
        }
        if(edit){
            if(isFormUpdated()){
                // edit the subsection
                handleEditSubSection();
            }
            else{
                toast.error("No updation made yet");
            }
            return;
        }
            
        const formData = new FormData();
        formData.append("product_id", modalData);
        formData.append("title", data.title);
        formData.append("image", data.image);

        setLoading(true);
        // create the data in database
        const result = await createProductImage(formData,token);
        console.log("result of subsection : ", result);
        
        if(result){
            dispatch(setProduct(result));
        }

        setLoading(false);
        setModalData(null);
    }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">

    <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-gray-400 bg-gray-800">

           <div className="flex items-center justify-between rounded-t-lg bg-gray-700 p-5">
           <h2  className="text-xl font-semibold text-gray-50 ">{view ? ("Viewing") : edit? ("Editing") : add ? ("Adding") : ("")} Lecture</h2>

                <button
                onClick={()=>(!loading ? setModalData(null) : {})}
                >
                    <RxCross2 className="text-2xl text-gray-50"/>
                </button>
           </div>

           <form onSubmit={handleSubmit(onsubmit)}
             className="space-y-8 px-8 py-10"
           >

                    <ProductImage
                        name={"image"}
                        label={"Product image"}
                        register={register}
                        setValue={setValue}
                        errors={errors}
                        viewData={view ? modalData?.image : null}
                        editData={edit? modalData?.image:null}
                    />

                    <div className="flex flex-col space-y-2">

                            <label htmlFor='title' className="text-sm text-gray-50">Lecture Title {!view && <sup className="text-pink-200">*</sup>}</label>
                            <input
                                id='title'
                                name='title'
                                placeholder='Enter image Name'
                                className='w-full bg-gray-800 border text-gray-50  border-gray-700 rounded-lg py-1 px-6 text-lg  font-medium'
                                {...register("title",{required:true})}
                            />
                            {
                                errors.title && (<span className="ml-2 text-xs tracking-wide text-red-600">Title is required</span>)
                            }
                    </div>

                    {
                        !view && (
                          <div>
                                <button className='text-lg bg-yellow-300 py-2 px-4 rounded-md text-gray-500'>
                                    {loading ? "loading..." : edit? "save changes"  : "save"}
                                </button>
                          </div>
                        )
                    }
           </form>
    </div>


</div>
  )
}

export default ImageUploader