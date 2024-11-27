import React from 'react'

const ImageZoom = ({modalData}) => {
    
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="w-11/12 max-w-[850px] rounded-lg border border-gray-400
         bg-gray-800 p-6 flex flex-col items-center justify-center gap-4">

            <img src={modalData?.imageLink} alt={`product-image`}  className='w-[700px]'/>

            <div className="flex items-center gap-x-4">   

                <button onClick={modalData?.btn1Handler}
                className="cursor-pointer rounded-md bg-gray-200 py-[8px] px-[20px] font-semibold text-gray-900"
                >
                    {modalData?.btn1text}
                </button>

            </div>
            
        </div>

    </div>
  )
}

export default ImageZoom