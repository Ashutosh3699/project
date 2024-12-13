import React, { useState } from 'react';
import { HomePageExplore } from '../../data/homepage-explore';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination,Navigation } from 'swiper/modules';

const ConsultancyData = () => {

    const ExploreBar = [
        "Custom Drone Design",
        "Custom Die Design",
        "Contract Manufacturing of Drone Parts",
        "Type Certification from DGCA"
    ]

    const [coursetag, setCourseTag] = useState(HomePageExplore[0].tag);
    const [course, setCourse] = useState(HomePageExplore[0].courses);
    const [currentCourse, setCurrentCourse] = useState(HomePageExplore[0].courses[0]);

    const setCourseFunction = (value)=>{

        setCourseTag(value);
        const result = HomePageExplore.filter((element) => element.tag === value);
        setCourse(result[0].courses);
        setCurrentCourse(result[0].courses[0]);
    }



  return (
    <div className='flex flex-col  gap-2 pt-4  relative  w-full  lg:pb-[150px] bg-white z-10'>
        {/* heading  */}
        <div  className=' text-xl md:text-3xl text-gray-700  font-semibold  text-center'>
            Reach us for any solutions
        </div>

        {/* subheading */}
        <div  className='text-sm text-gray-400  font-medium  text-center'>
            Learn to Build Anything You Can Imagine
        </div>

        {/* explore bar */}
        <div  className='flex flex-row justify-between w-[95%] md:w-[80%] lg:w-[70%] mx-auto rounded-full  bg-gray-600 py-1 px-1  lg:mt-6 '>
           <Swiper
               spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                }}
           >
            {
                    ExploreBar.map((element,index) => {
                        return (
                            <SwiperSlide 
                            key={index}
                            className={`flex  items-center  w-full px-5  py-1  rounded-full justify-center text-xs font-thin md:text-base md:font-medium 
                            ${element===coursetag ? (" text-gray-50  bg-gray-900 "):
                            ("  text-gray-100 ") }  cursor-pointer  hover:bg-gray-800  hover:text-gray-50 `}
                            onClick={()=>setCourseFunction(element)}
                            >
                                {element}
                            </SwiperSlide>
                        )
                    })
                }
           </Swiper>
        </div>

        {/* cardContent */}

            <div className='flex flex-row gap-6 mx-auto w-[95%] md:w-[70%]  lg:w-[75%]  justify-center lg:absolute lg:gap-0  lg:justify-between flex-wrap  lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]'>
                {
                    course.map((element, index)=>{
                        return (
                        <div  className={`flex flex-col pt-6 pb-3 px-4 gap-10 w-[95%] md:w-[70%]    lg:w-[31%] cursor-pointer
                        ${element === currentCourse ? (" bg-gray-50  drop-shadow-2xl "):(" bg-gray-500 drop-shadow-2xl ")}`}
                        onClick={()=>setCurrentCourse(element)}
                         key={index}>
                           
                           <div className='flex flex-col  gap-3 items-start '>
                             <h4  className={`text-lg  ${element === currentCourse ? (" text-gray-400"):(" text-gray-100")}
                              font-semibold`}>{element.heading}</h4>
                                <p className={`text-sm  ${element === currentCourse ? (" text-gray-600"):(" text-gray-50")}
                              font-semibold`}>{element.description}</p>
                           </div>

                        </div>
                        )
                    })
                }
            </div>

    </div>
  )
}

export default ConsultancyData