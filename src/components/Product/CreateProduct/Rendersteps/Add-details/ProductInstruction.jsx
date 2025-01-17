import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const ProductInstruction = ({name,label,register,errors,setValue}) => {

    const [instructionList, setInstructionList] = useState([]);
    const {product,editProduct} = useSelector((state)=>state.product);
    const [instruction,setInstruction] = useState("");

    useEffect(()=>{
            
        if(editProduct){
            setInstructionList(product?.instructions);
        }

        register(name,{
            validate: (value)=>value.length>0
        })
    },[]);

    useEffect(()=>{
        setValue(name,instructionList)
    },[instructionList]);

    const handleAddInstruction = ()=>{
        if(instruction){
          setInstructionList([...instructionList,instruction]);
          setInstruction("");
        }
      }

    const handleRemoveInstruction = (index)=>{
        const updateRequirement = [...instructionList];
        updateRequirement.splice(index,1);
        setInstructionList(updateRequirement);
    }

  return (
    <label className="flex flex-col space-y-2 items-start ">
    <div className='text-md text-gray-50 font-semibold'>
        {label}<sup  className="text-red-600">*</sup>
    </div>
    <input
        id={name}
        type='text'
        name={name}
        placeholder={`Enter ${label}`}
         className='lg:w-[70%] bg-gray-800 text-gray-50 border border-gray-700 rounded-lg py-1 px-2 text-lg  font-medium'
        value={instruction}
        onChange={(e)=>(setInstruction(e.target.value))}
    />
    <button 
    type='button'
    className="font-semibold text-yellow-200"
    onClick={()=>handleAddInstruction()}>
      Add
    </button>
   
    {
        instructionList?.map((element,index)=>(
        <div key={index} className="flex items-center text-gray-50">
          <span>{element}</span>
          <button 
           className="ml-2 text-xs text-gray-300 "
            type='button'
            onClick={()=>handleRemoveInstruction(index)}>
            clear
          </button>
        </div>
      ))
    }
    {errors[name] && <p  className="ml-2 text-xs tracking-wide text-red-500">{label} is required.</p>}
    
</label>
  )
}

export default ProductInstruction