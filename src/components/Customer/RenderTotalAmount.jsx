import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../common/ConfirmationModal';

const RenderTotalAmount = () => {

  const {total,carts} = useSelector((state)=>state.cart);
  const {token} = useSelector((state)=>state.auth);
  const {user} = useSelector((state)=>state.profile);
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const dispatch = useDispatch();

  const handleBuyCourse= ()=>{

      console.log("buy carts: ", carts);
      if(token){
        // buyCourse(token, courses, user, navigate, dispatch)
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



  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-gray-700 bg-gray-800 p-6 mr-10">
    <p className="mb-1 text-xl font-medium text-gray-300 text-center">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-300 text-center">₹ {total}</p>
        <button onClick={()=>{handleBuyCourse()}} className="w-full justify-center bg-yellow-300 text-black text-center px-4 py-2">
          Buy Now
        </button>

        {confirmationModal && <ConfirmationModal  modalData={confirmationModal}   />}
 </div>
  )
}

export default RenderTotalAmount