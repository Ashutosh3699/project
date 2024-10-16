import React from 'react'
import { useSelector } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import ProductInformationForm from './Add-details/ProductInformationForm';
import ProductImageSection from './productImage/ProductImageSection';
import ProductPublish from './ProductPublish';

const RenderSteps = () => {

    const steps = [{
        id:1,
        name:"Add Product"
    },{
        id:2,
        name:"Update Product image"
    },{
        id:3,
        name:"Publish"
    }];

    const {step} = useSelector((state)=>state.product);
    console.log("step is: ", step);

  return (
    <div>
        <div className="relative mb-2 flex w-full justify-center">
            {steps.map( (item,index) => (
                <>   
                {/* warning due to index key */}
                    <div key={index}
                    className="flex flex-col items-center "
                    >
                      <button
                          className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                          step === item.id
                              ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                              : "border-gray-700 bg-gray-800 text-gray-300"
                          } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
                      >
                          {step > item.id ? (
                          <FaCheck className="font-bold text-gray-900" />
                          ) : (
                          item.id
                          )}
                      </button>
                    
                    </div>
                    {item.id !== steps.length && (
                    <>
                        <div
                        className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                        step > item.id  ? "border-yellow-50" : "border-gray-500"
                        } `}
                        ></div>
                    </>
                    )}
                </>
            ) )}
        </div>
        
        <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item,index) => (
          <div key={index}>
            <div
              className="flex min-w-[130px] flex-col items-center gap-y-2"  
            >
              
              <p
                className={`text-sm ${
                  step >= item.id ? "text-gray-50" : "text-gray-500"
                }`}
              >
                {item.name}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      {
        step===1 && <ProductInformationForm/>
      }
      {
        step === 2 && <ProductImageSection/>
      }
      {
        step === 3 && <ProductPublish/>
      }
    
    </div>
  )
}

export default RenderSteps