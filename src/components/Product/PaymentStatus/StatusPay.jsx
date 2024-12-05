import React, { useEffect, useState } from 'react'
import { findPaymentStatus, PaymentStatusDone } from '../../../services/operations/productApi'
import { useSelector } from 'react-redux';
import { PAYMENT_STATUS } from '../../../utils/constant';
import ConfirmationModal from '../../common/ConfirmationModal';

const StatusPay = () => {

    const {token} = useSelector((state)=>state.auth);
    const {user} = useSelector((state)=>state.profile);
    const [paymentData, setPaymentData] = useState([]);
    const [loading,setloading] = useState(true);
    const [confirmationModal, setConfirmationModal] = useState(null);
    
    useEffect(()=> {
      
      const fetchData = async()=>{
        const product = await findPaymentStatus(token,user);
        setPaymentData(product.data.data);
      }

      fetchData();
      setloading(false);
    },[])

    const handleClickButton= async(payment_id)=>{
      setloading(true);
      console.log("payment is: ", payment_id);
      const result = await PaymentStatusDone(token,{payment_id});
      console.log("data recieved: ",result.data);
      setPaymentData(result.data.data);
      setloading(false);
      setConfirmationModal(null);
    }

    if(loading===true){
      return <div>
        Loading....
      </div>
    }

  return (
    <div className='w-[90%] py-10 px-5 text-white mx-auto flex flex-col items-start gap-4'>

        <div className='text-4xl font-semibold mb-8'>
            <h2>Payment status</h2>
        </div>

        <div  className='w-[90%] mx-auto '>
            <div  className='flex flex-row w-full gap-4 flex-wrap'>
                {paymentData!==undefined &&
                  paymentData.map((item,index)=>(
                    item.payStatus===PAYMENT_STATUS.NOT_DONE && <div
                    key={index}
                    className='flex flex-col w-[30%] p-3  border border-blue-color rounded-xl bg-gray-500 
                    shadow-lg transition-all duration-1000  hover:scale-105'
                    >
                      <div>
                        <div className='w-[100%] overflow-hidden rounded-lg mx-auto'>
                          <img  src={item.productId.thumbnail}   alt='productIameg' className='w-full' />
                        </div>
                          <div className='w-[full] mx-auto px-2 py-2 bg-gray-800 rounded-lg my-2'>
                            <h3 className=' font-medium text-md'> {item.productId.productName.toUpperCase()}</h3>
                            <p>₹ {item.productId.price}</p>
                            <p>Quantity: {item.quantity}</p>
                          </div>
                      </div>

                      <div>
                          <h3>User: <span className='text-md font-medium text-gray-200'>{item.userId.firstName}  {item.userId.lastName}</span></h3>
                          <h2 className=' bg-red-400 w-full rounded-md text-center'>
                          Status: {item.payStatus===PAYMENT_STATUS.NOT_DONE?("PENDING"):("DONE")}</h2>

                          <div>
                            <button className='my-2 py-2 px-4 bg-green-500 font-semibold  text-yellow-200  rounded-lg transition-all duration-300 
                             hover:scale-105' onClick={()=>{
                              setConfirmationModal({
                                text1: "Do you want to buy the course",
                                text2: "Are you sure !",
                                btn1text:"Done",
                                btn2text:"Cancel",
                                btn1Handler:()=> handleClickButton(item._id),
                                btn2Handler:()=>setConfirmationModal(null),
                              })
                             }}>
                                Payment Done
                            </button>
                          </div>
                      </div>
                </div>
                  ))
                }
            </div>
        </div>

        {confirmationModal && <ConfirmationModal  modalData={confirmationModal}   />}
    </div>
  )
}

export default StatusPay