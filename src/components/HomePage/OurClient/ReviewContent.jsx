import React, { useState } from 'react'

const ReviewContent = (props) => {

    const [readmore,setReadmore] = useState(false);

    const para = readmore ? (`${props.description}    `) : (`${props.description.substring(0,150)}.....  `);
    function readMoreFunc(){

        setReadmore(!readmore);
    }

  return (
  

    <div className=' text-xs text-gray-500'>
    {para}
    <span onClick={readMoreFunc} className=' underline capitalize cursor-pointer italic'>{
        readmore ? `show less` :`read more`
                }</span>
    </div>
  )
}

export default ReviewContent