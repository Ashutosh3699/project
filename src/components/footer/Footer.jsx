import React from 'react'

const Footer = () => {
  return (
    <div  className='flex flex-col py-5 px-4  bg-black opacity-70  text-white'>
        <div  className='flex  justify-between  items-baseline'>
                <div>Logo</div>

                <div>
                    <div>
                        About us
                    </div>
                    <ul>
                        <li>Absolute Reliability</li>
                        <li>Innovative Flexibility</li>
                        <li>Versatility</li>
                        <li>Complete Safety</li>
                        <li>Complete Commitment</li>
                    </ul>
                </div>

                <div>
                    <div>
                        Contact us
                    </div>
                    <ul>
                        <li>number</li>
                        <li>address</li>
                        <li>mail id</li>
                    </ul>
                </div>

                <div>
                    <div>
                         Support
                    </div>
                    <div>
                        Privacy policy
                    </div>
                    <div>
                        Terms and conditions
                    </div>
                    <div>
                      Help
                    </div>
                </div>

        </div>

        <div>
            {/* logo of social media */}
        </div>

        <div>
            {/* copyright */}
        </div>
    </div>
  )
}

export default Footer