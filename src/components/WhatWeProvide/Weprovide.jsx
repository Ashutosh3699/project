import React from 'react';
import bgImage from "../../assets/whiteBg.png";
import ServicesContent from './ServicesContent';
import { services } from './services/first';
import { Link } from 'react-router-dom';

const Weprovide = () => {

  return (
    <div className='w-full relative h-full  opacity-90 text-white py-5 ' 
        style={{backgroundImage: `url(${bgImage})`}}
    >
            <h2 className='flex  justify-center text-3xl pt-4 select-none  text-slate-500  font-bold'>OUR SERVICES</h2>

            <div className='w-[50px] h-[7px]  bg-gradient-to-r from-cyan-500 to-blue-500  mx-auto mt-2' ></div>

              <div className=' lg:block  hidden'>
                <ServicesContent/>
              </div>
              <div className='lg:hidden  flex md:flex-row flex-col gap-3 mt-3  items-center  flex-wrap justify-around'>
              {
                    services.map((item,index)=>{
                        return (
                           <Link to={`/our-services/${item.id}`}  className='hover:scale-95 transition-all duration-200' key={index}  >
                            <div  
                                className='w-[250px]  h-[150px] bg-white  overflow-hidden rounded-lg  text-black flex 
                                    flex-col  justify-around  items-center border border-cyan-300  shadow-md shadow-cyan-500 cursor-pointer'>

                                        <img  src={item.image}  className={item.size}/>
                                    
                                        <div  className='w-full md:w-[75%] text-sm text-center  font-semibold px-2 md:px-0 md:mx-auto  align-middle pb-6'>
                                            {item.name}
                                        </div>
                                </div>
                           </Link>
                        )
                    })
                }
              </div>

    </div>
  )
}

export default Weprovide