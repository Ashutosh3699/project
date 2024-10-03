import React,{useEffect, useState} from 'react';
import { getAllProducts } from '../../../services/operations/productApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../../features/cartSlice';


const ProductContext = () => {

    const [showProduct, setShowProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {totalItems,total,carts} = useSelector((state)=>state.cart);

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
        console.log("add to cart: ",carts );
        console.log("add to totalItem: ",totalItems );
        console.log("total is:", total);
    }

    const getProductdetail= async(index)=>{
        
        const selectproduct = showProduct.filter((item)=>item._id === index);
        navigate(`/product/${selectproduct[0]._id}`);
    }


  return (
    <div className=' flex gap-4 flex-wrap w-[80%] mx-auto'>
        {
            showProduct.map((element)=>(
                <div key={element._id} className='flex flex-col w-[300px] items-center gap-3 bg-gray-900 rounded-xl overflow-hidden border border-gray-500'>

                    <img  src={element.thumbnail} alt={`product-image-${element.productName}`} className='lg:w-[300px]  ' />
                    <h3 onClick={()=>getProductdetail(element._id)}  >{element.productName}</h3>
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

export default ProductContext