import React from 'react'

const ConfirmationModal = ({modalData}) => {
    
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="w-11/12 max-w-[350px] rounded-lg border border-gray-400 bg-gray-800 p-6">

            <p  className="text-2xl font-semibold text-gray-50">
                {modalData?.text1}
            </p>

            <p className="mt-3 mb-5 leading-6 text-gray-200">
                {modalData?.text2}
            </p>

            <div className="flex items-center gap-x-4">   

                <button onClick={modalData?.btn1Handler}
                className="cursor-pointer rounded-md bg-gray-200 py-[8px] px-[20px] font-semibold text-gray-900"
                >
                    {modalData?.btn1text}
                </button>


                <button onClick={modalData?.btn2Handler}
                className="cursor-pointer rounded-md bg-gray-200 py-[8px] px-[20px] font-semibold text-gray-900"
                >
                    {modalData.btn2text}
                </button>

            </div>
            
        </div>

    </div>
  )
}

export default ConfirmationModal