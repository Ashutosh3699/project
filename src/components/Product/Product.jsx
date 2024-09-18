import React,{useEffect, useState} from 'react';
import {getAllProducts} from "../../services/operations/productApi"
import { useDispatch, useSelector } from 'react-redux';
import {addItems} from "../../features/cartSlice"

const Product = () => {

    const [showProduct, setShowProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {totalItems,total,carts} = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    useEffect(()=>{
        
        const fetchAllProduct= async()=>{
            const response = await  getAllProducts();
            setShowProduct(response);
        }

        setLoading(true);
        fetchAllProduct();
        setLoading(false);
    },[])

    console.log("response is : ", showProduct);

    const addToCart=(index)=>{
        const selectproduct = showProduct.filter((item)=>item._id === index);
        dispatch(addItems(selectproduct));
        
    }

    console.log("add to cart: ",carts );
    console.log("add to totalItem: ",totalItems );
    console.log("total is:", total);

  return (
    <div className='bg-regal-blue py-16 px-10 text-white'>
    {
        loading ? (<div>....loading</div>) :(
            <div className=' flex flex-row flex-wrap gap-x-8 gap-y-4 p-4'>
                {
                    showProduct.map((element)=>(
                        <div key={element._id} className='flex flex-col items-center gap-3 bg-gray-900 rounded-xl overflow-hidden border border-gray-500'>

                            <img  src={element.thumbnail} alt={`product-image-${element.productName}`} className='lg:w-[300px]  ' />
                            <h3>{element.productName}</h3>
                            <p>
                                {element.productDetail}
                            </p>
                            <p>
                                {element.price}
                            </p>

                            <button   onClick={()=>addToCart(element._id)}>
                                Add cart
                            </button>

                        </div>
                    ))
                }
            </div>
        )
    }

    </div>
  )
}

export default Product