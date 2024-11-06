import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../../services/operations/productApi';
import { setEditProduct, setProduct } from '../../../features/productSlice';
import RenderSteps from '../CreateProduct/Rendersteps/RenderSteps';


const EditCourse = () => {

    const dispatch = useDispatch();
    const {productId} = useParams();
    const [loading,setLoading] = useState(false);
    const {product} = useSelector((state)=>state.product);
    const {token} = useSelector((state)=>state.auth);


    useEffect(()=>{

        const populateProductDetail =async()=>{
            setLoading(true);
            const result = await  fetchProductDetail(productId);

            console.log("result of edit course is: ", result);

            if(result){
                dispatch(setEditProduct(true));
                dispatch(setProduct(result));
            }
            setLoading(false);
        }

        populateProductDetail();
    },[productId])


    if(loading){

        return <div>
            ...Loading
        </div>
    }

    console.log("produuct is: ", product);
  return (
    <div className='text-white'>
        <h2>Edit Course</h2>

        <div>
        {
            product ? (<RenderSteps/>) : (<p>Course Not Found</p>)
        }
        </div>
    </div>
  )
}

export default EditCourse