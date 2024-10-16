import React, { useState } from 'react'
import { ACCOUNT_TYPE, PRODUCT_STATUS } from '../../utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addItems } from '../../features/cartSlice';

const BuyProduct = ({product,quantity}) => {

    // console.log("buy card: ", product);
    const {productId}= useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const {carts, totalItems, total} = useSelector((state)=>state.cart);

    // if not logged in then show confirmation modal
    const [confirmatioModal, setConfirmationModal] = useState(null);
    // paymentloading from productSlice
    const {paymentLoading} = useSelector((state)=>state.product);
    const {loading} = useSelector((state)=>state.profile);

    const handleBuyFunction= ()=>{
        if(token){
        //    buyCourse(token, [courseId], user, navigate, dispatch)
          return;
        }
        else{
          setConfirmationModal({
            text1: "Do you want to buy the course",
            text2: "You are not logged in, please login first",
            btn1text:"login",
            btn2text:"cancel",
            btn1Handler:()=>navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
          })
        }
      }
  
      const handleAddToCart=()=>{
        
        const updatedProduct = {
            ...product,
            selectQuantity: quantity
         };
        
        if(user && user.accountType === ACCOUNT_TYPE.ADMIN){
          toast.error("Your account type is instrutor");
        }
        else{
            // console.log("product is: ", product);
          dispatch(addItems([updatedProduct]));
        }

        // console.log("cart is: ", carts);
        // console.log("total is: ", total);
      }

    if(loading || paymentLoading){

        return <div>....loading</div>
    }
    
  return (
    <div className='flex flex-col gap-3 w-full items-center'>
    {
     product.inStock===PRODUCT_STATUS.DRAFT &&  <button
     onClick={()=>handleAddToCart()}
     className='bg-yellow-300 text-gray-700 py-2 w-[90%] rounded-md'
     >Add to Cart</button>
    }
    {
    product.inStock===PRODUCT_STATUS.DRAFT  &&   <button
     onClick={()=>handleBuyFunction()}
     className=' bg-gray-500 text-gray-50 font-semibold py-2 w-[90%] rounded-md border-b-2 border-gray-300'
     >Buy now</button>
    }
    {
    product.inStock===PRODUCT_STATUS.PUBLISHED  && <button
     className='bg-yellow-50 text-richblack-700 py-2 w-[90%] rounded-md'
     >Go to contact-us</button>
    }
     {/* <p className='text-xs text-caribbeangreen-50'>30-Day Money-Back Guarantee</p> */}
 </div>
  )
}

export default BuyProduct