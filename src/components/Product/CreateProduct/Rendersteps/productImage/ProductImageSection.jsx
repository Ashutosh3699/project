import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageUploader from './ImageUploader';
import ConfirmationModal from '../../../../common/ConfirmationModal';
import { setEditProduct, setProduct, setStep } from '../../../../../features/productSlice';
import { deleteProductImage } from '../../../../../services/operations/productApi';
import { FaArrowRightLong } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';

const ProductImageSection = () => {

    const {product} = useSelector((state)=>state.product);
    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth);

    const [addSubSection,setAddSubSection] = useState(null);
    const [viewSubSection,setViewSubSection] = useState(null);
    const [editImageUploader, setImageUploader] = useState(null);
    const [confirmationModal,setConfirmationModal] = useState(null);

  console.log("product is: ", product);

  const handleDeleteImage=async(imageId,productId)=>{
    const result = await deleteProductImage({
      productImage_id: imageId,
      productId: productId,
    },token);

    if(result){
        dispatch(setProduct(result));
    }

    setConfirmationModal(null);
  }

  const  goBack=()=>{
    dispatch(setStep(1));
    dispatch(setEditProduct(true));
  }

  const goToNext=()=>{

    // console.log("courses is: ", course);
    if(product?.image?.length <= 1){
      toast.error("Add atleast two section");
      return;
    }

    dispatch(setStep(3));
  }


  return (
    <div>
      {/* insert a product */}
      <div className='my-4 '>
        <button  onClick={()=>setAddSubSection(true)}
        className='py-2 px-5 bg-yellow-300 text-gray-800 font-semibold text-xl rounded-lg cursor-pointer 
        hover:scale-95 transition-all duration-300'
         >
          Add product
        </button>
      </div>
      <div className='w-full flex flex-col gap-3 text-gray-50  mt-12 mb-8 bg-blue-950 border  border-gray-300 rounded-lg py-8 px-6 '>
            {
              product.image.map((image, index)=>(
                <div className='flex w-full justify-around items-center bg-blue-color py-2 rounded-lg ' 
                key={index} 
                onClick={()=>setViewSubSection(image)}>
                    <div className='flex w-[60%]  justify-around items-center'>
                        <img src={image.image} alt='product_image' className='w-10 h-10 object-cover border border-gray-900 rounded-sm'  />
                        <h4>{image.title}</h4>
                    </div>
                    <div  className='flex items-center gap-x-3'  onClick={(e)=>e.stopPropagation()} >
                        <button  onClick={()=>setImageUploader(image)}  >
                          <MdEdit className="text-xl text-richblack-300"/>
                        </button>
                        <div  onClick={()=>setConfirmationModal({
                          text1: "Delete this section",
                          text2: "Are you sure, you want to delete this section",
                          btn1Handler: ()=>{handleDeleteImage(image?._id, product?._id)},
                          btn2Handler: ()=>{setConfirmationModal(null)},
                          btn1text: "delete",
                          btn2text:"cancel"
                        })}>
                          <RiDeleteBin2Fill  className="text-xl text-richblack-300"/>
                        </div>
                    </div>
                   
                </div>
              ))
            }
      </div>

      <div className='flex justify-end gap-x-4'>
                <button
                onClick={goBack}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-gray-300 py-[8px] px-[20px] font-semibold text-gray-900`}
                >
                    back
                </button>

                <button
                onClick={goToNext}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-yellow-300 py-[8px] px-[20px] font-semibold text-gray-900`}
                >
                    next
                    <FaArrowRightLong/>
                </button>
               
            </div>


      {
        addSubSection && (<ImageUploader 
        modalData={product._id}
        setModalData={setAddSubSection} 
        add={true}
        />) 
      }
      {
        viewSubSection && (<ImageUploader 
        modalData={viewSubSection}
        setModalData={setViewSubSection} 
        view={true}
        />) 
      }
      {
        editImageUploader && (<ImageUploader 
        modalData={editImageUploader}
        setModalData={setImageUploader} 
        edit={true}
        />) 
      }
      {
        confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )
      }
    
    
    </div>
  )
}

export default ProductImageSection