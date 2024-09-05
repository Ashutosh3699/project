import React , { useRef, useState, useEffect  }from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { services } from './services/first';

const ServicesContent = () => {

    const divRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const props = useSpring({ scale: isIntersecting ? 1 : 0, from: { scale: 0 } });
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        setIsIntersecting(entries[0].isIntersecting);
      }, { threshold: 0.5 }); // Adjust the threshold as needed
  
      observer.observe(divRef.current);
  
      return () => observer.disconnect();
    }, [divRef]);

  return (
    <div  className='flex flex-wrap gap-7 justify-around mx-5  md:mx-20  mt-8  py-6'>
    
    {
                    services.map((item,index)=>{
                        return (
                           <Link to={`/our-services/${item.id}`}  className='hover:scale-95 transition-all duration-200' key={index} >
                            <animated.div style={props}  ref={divRef}
                                className='w-[250px]  h-[150px] bg-white  overflow-hidden rounded-lg  text-black flex 
                                    flex-col  justify-around  items-center border border-cyan-300  shadow-md shadow-cyan-500 cursor-pointer'>

                                        <img  src={item.image}  className={item.size}/>
                                    
                                        <div  className='w-full md:w-[75%] text-sm text-center  font-semibold px-2 md:px-0 md:mx-auto  align-middle pb-6'>
                                            {item.name}
                                        </div>
                                </animated.div>
                           </Link>
                        )
                    })
                }
    </div>
  )
}

export default ServicesContent