import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductDetail } from '../../services/operations/productApi';


const ViewProduct = () => {

  const {productId} = useParams();
  const [productData,setProductData] = useState({});
  const [image,setImage] = useState(0);
  const [imageList,setImageList] = useState([]); 
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    
    const getproduct = async()=>{
      const res = await fetchProductDetail(productId);
      console.log("res",res);
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


  return (
    <div className='w-full bg-white py-20  '>
        {
          loading===true ? (
            <div className='text-4xl text-white font-semibold'>
              ...loading
            </div>
          ):
          (
            <div className=' lg:w-[100%] flex flex-row justify-center mx-auto'>
                
                <div className='w-[90%] flex items-start justify-between py-8 px-8 bg-gray-800 text-white rounded-xl'>
                    <div>
                          <div className='lg:w-[400px] aspect-square overflow-hidden '>
                            <img src={imageList[image]} alt={`product-image-${image}`}  className='w-full'/>
                          </div>

                          <div className='flex flex-row gap-3 '>

                              {
                                imageList?.map((item,index)=>{
                                  return <div key={index } className='w-20 h-20 aspect-square overflow-hidden'
                                  onClick={()=>setImage(index)}
                                  >
                                    <img src={item} alt={`product-image-${item}`} className={`${index===image ? "border border-gray-200 scale-90" : ""} w-full`} />
                                  </div>
                                })
                              }

                          </div>

                    </div>

                    <div className='flex flex-col items-center '>
                              <div>
                                  <h2>{productData.productName}</h2>
                                  <div>
                                      {
                                        productData.instructions?.map((item,index)=>(
                                          <p key={index}>{item}</p>
                                        ))
                                      }
                                  </div>
                                  <div>
                                    {productData.price}
                                  </div>
                              </div>
                              <div>
                                {productData.productDetail}
                              </div>
                              <div>
                                      {productData.whatWeWillget}
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