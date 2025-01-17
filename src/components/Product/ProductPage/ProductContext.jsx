import React,{useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTagProduct } from '../../../services/operations/categoryApi';


const ProductContext = () => {

    const [showProduct, setShowProduct] = useState([]);
    // const [selectedCategory, setSelecetedCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [tagName,setTagName] = useState(null);

    const {tagId} = useParams();

    useEffect(()=>{

        setLoading(true);
        const fetchTagProduct= async()=>{
            console.log("tag --> category is:----> ", tagId);
            const response = await  getTagProduct(tagId);
            console.log(response);
            setShowProduct(response.product);
            setTagName(response.TagName);
        }

        fetchTagProduct();
        setLoading(false);
    },[tagId])

    const [sortOption, setSortOption] = useState('default');

    useEffect(()=>{

        const sortProductData = (products, option) => {

            let newProducts = [];

            if (option === 'alphabet-az') {
               newProducts =  [...products].sort((a, b) => a.productName.localeCompare(b.productName));
            } else if (option === 'alphabet-za') {
               newProducts = [...products].sort((a, b) => b.productName.localeCompare(a.productName));
            } else if (option === 'price-low-high') {
               newProducts = [...products].sort((a, b) => a.price - b.price);
            } else if (option === 'price-high-low') {
               newProducts = [...products].sort((a, b) => b.price - a.price);
            }
            else{
                newProducts = products;
            }
            if(newProducts!=[]){
                setShowProduct(newProducts);
            }
          };

          if(showProduct!=[])  sortProductData(showProduct,sortOption);

    },[sortOption])

    console.log("response is showproducts : ", showProduct);

    const getProductdetail= async(index)=>{
        
        const selectproduct = showProduct.filter((item)=>item._id === index);
        // console.log("selected product is: ", selectproduct);
        navigate(`/product/${tagId}/${selectproduct[0]._id}`);
    }

    if(loading === true){
        return (<div>...loading</div>)
    }


  return (
    <div className=' flex gap-4 flex-wrap w-[80%] mx-auto'>

        <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded-md  h-10"
            >
            <option value="default">Sort by</option>
            <option value="alphabet-az">Alphabetical (A-Z)</option>
            <option value="alphabet-za">Alphabetical (Z-A)</option>
            <option value="price-low-high">Price (Low to High)</option>
            <option value="price-high-low">Price (High to Low)</option>
            </select>

        <h2 className='w-full text-2xl font-semibold text-gray-600'>{
            tagName ? tagName : <div>No product available</div>
        }</h2>
        {
            showProduct?.length>0 ? (showProduct.map((element)=>(
                <div key={element._id} className='flex flex-col gap-2 overflow-hidden w-[100%] 
                md:w-[31%] rounded-lg  bg-zinc-100 shadow-inner' onClick={()=>getProductdetail(element._id)}>

                    <img  src={element.thumbnail} alt={`product-image-${element.productName}`} className='lg:w-[300px]  ' />
                    
                    <div className='px-4 py-3'>
                        <h3  className='text-zinc-600 text-xl font-semibold'  >{element.productName}</h3>
                        <p  className=' text-sm md:text-md text-zinc-500 font-sans'>
                            {element.productDetail.slice(0,100)} ....
                        </p>
                        <p className='italic  text-lg text-zinc-400 font-semibold'>
                           Rs. {element.price}
                        </p>

                    </div>
                </div>
            ))) :("No product available")
        }
        {
            showProduct.length==0 && <div className='text-gray-500  font-bold text-2xl '>No Product available </div>
        }


    
    </div>
  )
}

export default ProductContext