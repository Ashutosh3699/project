import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductDetail } from '../../services/operations/productApi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { FaMinus, FaPlus, FaRegShareFromSquare } from 'react-icons/fa6';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import ReactImageMagnify from 'react-image-magnify';
import { ACCOUNT_TYPE, PRODUCT_STATUS } from '../../utils/constant';
import BuyProduct from './BuyProduct';
import { useSelector } from 'react-redux';


const ViewProduct = () => {

  const {productId} = useParams();
  const {user} = useSelector((state)=>state.profile);
  const [productData,setProductData] = useState({});
  const [image,setImage] = useState(0);
  const [imageList,setImageList] = useState([]); 
  const [quantSelected, setQuantSelected] = useState(1);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    
    const getproduct = async()=>{
      const res = await fetchProductDetail(productId);
      // console.log("res",res);
      if(res){
        setProductData(res);
        const images = res?.image?.map((item)=>item.image);
        images.unshift(res.thumbnail);
        setImageList(images);
      }
    }
    setLoading(true);
    getproduct();
    setLoading(false);
  },[])

  const handleShare=()=>{

    copy(window.location.href);
    toast.success("copy successfull");
  }

  // console.log("imageList details is:   ", imageList);
  // console.log("product details is:   ", productData);

  return (
    <div className='w-full bg-white py-10  '>
        {
          loading===true ? (
            <div className='text-4xl text-white font-semibold'>
              ...loading
            </div>
          ):
          (
            <div className=' lg:w-[100%] flex flex-row justify-center mx-auto'>
                
                <div className='w-[80%] flex items-start gap-10 py-8 px-8 bg-gray-800 text-white rounded-xl'>
                    <div>
                          <div className='lg:w-[400px]    mb-10'>
                            {/* <img src= alt={`product-image-${image}`}  className='w-full'/> */}
                            <ReactImageMagnify {...{
                              smallImage: {
                                  alt: 'Wristwatch by Ted Baker London',
                                  isFluidWidth: true,
                                  src: imageList[image]
                              },
                              largeImage: {
                                  src: imageList[image],
                                  width: 700,
                                  height: 800,
                                  enlargedImagePosition: "besides"
                              }
                          }} />
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
                              quantSelected > 1 ? (<span>*select quantity: {quantSelected}</span>) : (<div></div>)
                            }
                          </div>

                          {
                           ( !user || user.accountType===ACCOUNT_TYPE.CLIENT) && <div className='my-3'>
                              <BuyProduct product={productData}  quantity={quantSelected}/>
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

               
            </div>
            
          )
        }
    
    </div>
  )
}

export default ViewProduct