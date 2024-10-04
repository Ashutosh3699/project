import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItems } from '../../../features/cartSlice';
import { getTagProduct } from '../../../services/operations/categoryApi';


const ProductContext = ({selectedCategory}) => {

    const [showProduct, setShowProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [tagName,setTagName] = useState(null);

    useEffect(()=>{

        const fetchAllProduct= async()=>{
            console.log("selected category is: ", selectedCategory);
            const response = await  getTagProduct(selectedCategory);
            console.log(response);
            setShowProduct(response.product);
            setTagName(response.TagName);
        }

        if(selectedCategory){

            setLoading(true);
            fetchAllProduct();
            setLoading(false);
        }
    },[selectedCategory])

    // console.log("response is : ", showProduct);

    const getProductdetail= async(index)=>{
        
        const selectproduct = showProduct.filter((item)=>item._id === index);
        navigate(`/product/${selectproduct[0]._id}`);
    }


  return (
    <div className=' flex gap-4 flex-wrap w-[80%] mx-auto'>

        <h2 className='w-full text-2xl font-semibold text-gray-600'>{
            tagName ? tagName : <div>No product available</div>
        }</h2>
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

                </div>
            ))
        }
    
    </div>
  )
}

export default ProductContext