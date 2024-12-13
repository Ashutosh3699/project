import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Paymenthistory } from '../../../services/operations/productApi';

const PurchaseHistory = () => {

    const {token} = useSelector((state)=>state.auth);
    const [history,setHistory] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const makeHistoryCall= async()=>{
            const result =  await Paymenthistory(token);
            console.log("result is isisisis: ", result);
            if(result.data.data.accountProducts){
                setHistory(result.data.data.accountProducts);
            }
            setLoading(false);
        }

        makeHistoryCall();
    },[]);

    if(loading===true){
        return <div>loading........</div>
    }

    console.log("set History is: ", history);

  return (
    <div className='w-[90%] py-10 px-5 text-white mx-auto flex flex-col items-start gap-4'>

        <div className='text-4xl font-semibold mb-8'>
            <h2>Payment History</h2>
        </div>

        <div  className='w-[90%] mx-auto '>
            <div  className='flex md:flex-row  flex-col w-full gap-4 flex-wrap '>
                {history!==undefined &&
                history.map((item,index)=>(
                <div
                    key={index}
                    className='flex flex-col md:w-[30%]  w-[75%] p-3  border border-blue-color rounded-xl bg-gray-500 
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
                </div>
                  ))
                }
            </div>
        </div>

    </div>
  )
}

export default PurchaseHistory