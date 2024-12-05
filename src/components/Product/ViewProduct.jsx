import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProductDetail } from '../../services/operations/productApi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { FaMinus, FaPlus, FaRegShareFromSquare } from 'react-icons/fa6';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import { ACCOUNT_TYPE, PRODUCT_STATUS } from '../../utils/constant';
import BuyProduct from './BuyProduct';
import { useSelector } from 'react-redux';
import { getTagProduct } from '../../services/operations/categoryApi';
import { MdOutlineZoomIn } from "react-icons/md";
import ImageZoom from './ImageZoom';


const ViewProduct = () => {

  const {productId,tagId} = useParams();
  const {user} = useSelector((state)=>state.profile);
  const [productData,setProductData] = useState({});
  const [image,setImage] = useState(0);
  const [imageList,setImageList] = useState([]); 
  const [quantSelected, setQuantSelected] = useState(1);
  const [loading,setLoading] = useState(false);
  const [other, setOther] = useState([]);
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);


  useEffect(()=>{
    
    const getproduct = async()=>{
      console.log("tag is: ", tagId);
      const res = await fetchProductDetail(productId);
      // console.log("res",res);
      if(res){
        setProductData(res);
        const images = res?.image?.map((item)=>item.image);
        images.unshift(res.thumbnail);
        setImageList(images);
      }

      const result = await getTagProduct(tagId);
      console.log("result tags is: ", result);
      if(result){
        setOther(result.product);
      }
    }
    setLoading(true);
    getproduct();
    setLoading(false);
  },[productId,tagId])

  const handleShare=()=>{

    copy(window.location.href);
    toast.success("copy successfull");
  }

  // console.log("imageList details is:   ", imageList);
  console.log("product details is:   ", other);

  return (
    <div className='w-full bg-white py-10  '>
        {
          loading===true ? (
            <div className='text-4xl text-white font-semibold'>
              ...loading
            </div>
          ):
          (
            <div className=' lg:w-[100%] flex flex-col justify-center items-center mx-auto gap-8 ' >
                
                <div className='w-full md:w-[80%] flex flex-col md:flex-row items-start gap-10 py-8 px-4 md:px-8 bg-gray-800 text-white rounded-xl'>
                    <div>
                          <div className='lg:w-[400px]    mb-10 relative'>
                            <img src={imageList[image]} alt={`product-image-${image}`}  className='w-[700px]'/>
                            <MdOutlineZoomIn  
                            onClick={()=>{setConfirmationModal({
                              imageLink: imageList[image],
                              btn1text:"cancel",
                              btn1Handler:()=>setConfirmationModal(null),
                            })}}
                            className=' absolute top-4 left-4 text-2xl hover:text-3xl  transition-all duration-300 cursor-pointer '/>
                          </div>

                          <div className='flex flex-row gap-3 '>

                              {
                                imageList?.map((item,index)=>{
                                  return <div key={index } className='w-16S h-16 aspect-square overflow-hidden'
                                  onClick={()=>setImage(index)}
                                  >
                                    <img src={item} alt={`product-image-${item}`} 
                                    className={`${index===image ? "border-2 border-gray-200 scale-90" : ""} w-full`} />
                                  </div>
                                })
                              }

                          </div>

                          {
                           ( !user || user.accountType===ACCOUNT_TYPE.CLIENT) && <div className='flex gap-2 items-center px-3 py-1 rounded-md bg-gray-700 justify-center'>
                              <FaPlus className=' cursor-pointer' onClick={()=>{
                                if(quantSelected<productData.quantity){
                                  setQuantSelected(quantSelected+1);
                                }
                              }}/>
                              <span className=' select-none'>Add item</span>
                              <FaMinus className=' cursor-pointer' onClick={()=>{
                                if(quantSelected>1){
                                  setQuantSelected(quantSelected-1);
                                }
                              }}/>
                          </div>
                          }
                          <div className=' select-none text-sm font-thin text-gray-300'>
                            {
                              quantSelected > 1 ? (<span>*selected quantity: {quantSelected}</span>) : (<div></div>)
                            }
                          </div>

                          {
                           ( !user || user.accountType===ACCOUNT_TYPE.CLIENT) && <div className='my-3'>
                              <BuyProduct product={productData}  quantity={quantSelected}/>
                          </div>
                          }
                          {
                            (user && user.accountType === ACCOUNT_TYPE.ADMIN) && <div>
                            <button
                              onClick={()=>{navigate(`/dashboard/edit-course/${productId}`)}}
                              className=' bg-yellow-400 text-gray-800 font-semibold py-2 w-[90%] rounded-md border-b-2 border-gray-500'
                              >Edit Product</button>
                            </div>
                          }

                    </div>

                    <div className='flex flex-col items-start gap-4 '>
                      <div className='space-y-4 select-none'>
                          <div className='flex flex-col gap-1'>
                            <h2 className='text-3xl font-semibold text-gray-100 uppercase'>{productData.productName}</h2>
                            <div className=' italic   font-sans text-gray-400 text-sm font-semibold text-start'>
                                {productData.whatWeWillget}
                            </div>
                          </div>

                      </div>

                      <div className='text-base font-thin  select-none'>
                        {productData.productDetail}
                      </div>
                      <div className='flex flex-col gap-1 items-start text-green-300 text-sm font-thin'>
                              {
                                productData.instructions?.map((item,index)=>(
                                  <p key={index} className='flex items-center gap-2'> 
                                  <span><IoIosArrowDroprightCircle/> </span>{item}</p>
                                ))
                              }
                        </div>
                        
                        <div className='flex gap-6 items-center'>
                          <div className='text-2xl text-gray-50  font-bold'>
                          ₹ {productData.price}
                          </div>

                          <div className='flex flex-row gap-2 items-center text-yellow-300 cursor-pointer' onClick={handleShare}>
                            <FaRegShareFromSquare/> share
                          </div>
                      </div>

                      <div className='flex gap-2 items-center'>
                      <span>quantity:</span>
                      <span 
                        className={`${productData.quantity> 4 ? "text-white" : "text-red-500"} font-thin text-base`}>
                        {productData.quantity} left</span> 
                        {
                          productData.inStock === PRODUCT_STATUS.DRAFT ? 
                          (<span className='text-lg bg-green-500  font-semibold px-4 py-1 rounded-lg text-gray-900'>{productData.inStock}</span>) :
                          (<span className='text-lg bg-red-500  font-semibold px-4 py-1 rounded-lg text-gray-50'>{productData.inStock}</span>)
                        }
                    </div>


                    </div>
                </div>

                <div className='w-full px-8 py-6 bg-gray-800 text-white'>
                        
                        <h3 className='text-2xl font-bold  py-4'>Learn related products: </h3>

                      <div className='flex gap-4 flex-row items-center justify-start flex-wrap'>
                      {other!==undefined &&
                          other.slice(0,4).map((product,index)=>(
                            product._id !== productId && (
                                <div key={index} 
                                className='flex flex-col gap-2 hover:scale-105 transition-all duration-500 overflow-hidden w-[90%] md:w-[24%]  
                                rounded-lg  bg-zinc-100 shadow-inner'
                                onClick={()=>{navigate(`/product/${tagId}/${product._id}`)}}
                                >

                                    <img  src={product.thumbnail} alt={`product-image-${product.productName}`} className='lg:w-[300px]  ' />

                                    <div className='px-4 py-3'>
                                      <h3  className='text-zinc-600 text-xl font-semibold'  >{product.productName}</h3>
                                      <p  className=' text-sm md:text-md text-zinc-500 font-sans'>
                                          {product.productDetail.slice(0,100)} ....
                                      </p>
                                      <p className='italic  text-lg text-zinc-400 font-semibold'>
                                          {product.price}
                                      </p>

                                  </div>

                                </div>
                            ) 
                          ))
                        }
                      </div>
                </div>
  
            </div>
            
          )
        }
        {confirmationModal && <ImageZoom  modalData={confirmationModal}  />}
    </div>
  )
}

export default ViewProduct