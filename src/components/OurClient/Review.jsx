import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import ReviewContent from './ReviewContent';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "./innershadow.css";

const Review = () => {

    const obj = [
      {
        id: 1,
        name: "Amit Iyer" ,
        star: 5,
        content: "Brilliant service, I called up several so called repair places, pretty much everyone are fleecing customers - aeromat however extremely professional and fixed my issue in 5 mins - keep it up, most recommended",
        time: "3 month ago",
        logo: "https://lh3.googleusercontent.com/a-/ALV-UjVUO_t8mM_u1vkyZblyyhzpo804NFeRO2Cq79S3s8ovGmVzz4rb=w75-h75-p-rp-mo-br100"

      },
      {
        id: 2,
        name: "K K" ,
        star: 5,
        content: "Thanks to Aeromat for expertly repairing my drone within budget. Impressed with their professionalism and cost-effective service!",
        time: "7 month ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjX141rXDz0k1U0icpOHVncCDhR272jr4AIPi3ufRchOvzufl8St=w75-h75-p-rp-mo-br100"

      },
      {
        id: 3,
        name: "pritam kamble" ,
        star: 5,
        content: "Product received from Aeromat... I visited firm personally and found very helpful and good support from them even for future work also.. They providing excellent service 😊 Thank you Aeromat",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a/ACg8ocL7uyNeUrlWa8Q46bHBTr4XbNs9NDJfkS_Mx5Tc7M1FZdB4-Q=w120-h120-p-rp-mo-br100"

      },
      {
        id: 4,
        name: "Tilu Kashi" ,
        star: 5,
        content: "Very nice",
        time: "7 month ago",
        logo:"https://lh3.googleusercontent.com/a/ACg8ocJyyWffUfT2zl0RNjy1wyj3IZvIIHwXy5oPOnAtUWYmMO8zHg=w120-h120-p-rp-mo-br100"

      },
      {
        id: 5,
        name: "Indrajeet Mane" ,
        star: 5,
        content: "Trusted dealer, Genuine products, Fast service, Ani barach kahi thanks dada for this drone!",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjVbUu_57fYBlOJxaNJcMCvyhNVU-K_X0115I486DnZmo2qoBlfLLQ=w120-h120-p-rp-mo-br100"

      },
      {
        id: 6,
        name: "SWAPNIL PATIL" ,
        star: 5,
        content: "Took spraying services from them, got result in 2-3 days... Spraying using drones is best innovation for farming till the time. Thank you to aeromat team !!!",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjW8WMK6lp6CYrddfUvLdDYdO_kZ909E2NJZFCj-SQ2tSZRn4UVZ=w120-h120-p-rp-mo-ba4-br100"

      },
      {
        id: 7,
        name: "Sourabh Wanjole" ,
        star: 5,
        content: "Good services, Effective and efficient Product ,Trustworthy Organization , Easily and Quickly Available for communication and deals.",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a/ACg8ocJJpnBxl5uEORqRyFgwFbP2R2HwQxmVY7lxaJ9UJY0HdotyTA=w120-h120-p-rp-mo-br100"

      },
      {
        id: 8,
        name: "Anuja Mohite" ,
        star: 5,
        content: "Their service is very good, you can trust their services and products.",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjUJkP9d5RiZHo17_n8KtVLjGZsPlalGYSIj-07zGo5l6KvtYSgC=w120-h120-p-rp-mo-br100"

      },
      {
        id: 9,
        name: "aaditi raj" ,
        star: 5,
        content: "Exceptional service..thank you",
        time: "10 month ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjX7RgMYPfXpCYThsD9YH-Hu5udyJwVlUudWhoP3nVaWAu7KpPQ7=w120-h120-p-rp-mo-br100"

      },
      {
        id: 10,
        name: "Shivani Patil" ,
        star: 5,
        content: "I got customised drone from them, their service is exceptional in the segment. Fully trustworthy and time bound services.",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a/ACg8ocIaBMrMOxxupEZksMyZhu6gdPs7MiTfA10PcEfZ6Z6q4e8dmlE=w120-h120-p-rp-mo-br100"

      },
      {
        id: 11,
        name: "Jaydeep Kole" ,
        star: 5,
        content: "Very good service and trustworthy products🙌",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a/ACg8ocI7UxAL7xaIxp5CuU6yz7usyBBaHDiHJXXIc4RxqVki7heYqw=w120-h120-p-rp-mo-br100"

      },
      {
        id: 12,
        name: "Singer_Vocalist" ,
        star: 5,
        content: "Excellent service 😍 Very nice experience,",
        time: "a year ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjWYELL7vfB9yAolyX0CF_o_sIM1Myye7JNIfgqSQWNRY-Zm6ss=w120-h120-p-rp-mo-br100"

      },
      {
        id: 13,
        name: "pooja yadav" ,
        star: 5,
        content: "Good products, best service.",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjUNrcVpLTjHHcU1Szljpj98-9SFKKl6ZdLvCRDx2QMJXPYvz2kR=w120-h120-p-rp-mo-br100"

      },
      {
        id: 14,
        name: "Vaibhav Dimble" ,
        star: 5,
        content: "Good work and Best service",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a/ACg8ocJUj54SFg-PnNTX-qwjwRUr3Klpoteb99X-MNBlwLFRJTjUKg=w120-h120-p-rp-mo-br100"

      },
      {
        id: 15,
        name: "arpita naik" ,
        star: 5,
        content: "Nice work & good service!",
        time: "2 years ago",
        logo:"https://lh3.googleusercontent.com/a-/ALV-UjX_2Bp1iKXfZJDbJUcpJTJibW6-UR_s1AIvA5q_jdbEzAKWGIo=w120-h120-p-rp-mo-br100"

      },

    ];

    const [shift,setShift] = useState(0);

    function leftFunc (){
      if(shift <= 0){
        setShift(0);
      }
      else{
        setShift(shift-200);
      }
    }

    function rightFunc(){
      if(shift >= 3200){
        setShift(3200);
      }
      else{
        setShift(shift+200);
      }
    }
    console.log(shift);
  return (
    
    <div className='w-full relative'>
    
    <div className=' w-full relative  overflow-hidden inner-shadow rounded-lg'>

        <div className= {`w-full  flex gap-4 relative  right-[${shift}px] duration-300`}>
              {
                    obj.map((person,index) => {
                      return(
                        <div key={index} className='flex flex-col gap-3 px-4 py-4  '>
                          <div>{person.name}</div>
                          <div>
                            <img src={person.logo} className='h-[50px] w-[50px] rounded-full'/>
                          </div>
                          <div className='italics text-xs text-gray-400'>{person.time}</div>
                          <div>
                            {
                              person.star === 5 ? (<div className='flex '><FaStar className=' text-yellow-400'/><FaStar className=' text-yellow-400'/><FaStar className=' text-yellow-400'/><FaStar className=' text-yellow-400'/><FaStar className=' text-yellow-400'/></div>) : (<div></div>)
                            }
                          </div>
                          <div className='w-[200px]'>
                              <ReviewContent description={person.content} />
                          </div>
                        </div>
                      )
                    })
              }
        </div>

      {/* <div  className='absolute z-5 top-0 left-0  cursor-pointer bg-white h-full
            flex justify-center items-center w-[100px]  text-white '></div>
      <div  className='absolute z-5   top-0  -right-10  cursor-pointer bg-blue-400   h-full
            flex justify-center items-center w-[100px]  text-white '> </div> */}
    </div>

          <div onClick={leftFunc} className='absolute z-20  text-4xl  top-1/2  -left-20  cursor-pointer bg-black opacity-40 rounded-full 
            flex justify-center items-center px-3 py-3  text-white '>
            <FaChevronLeft />
          </div>
          <div onClick={rightFunc} className='absolute z-10  text-4xl  top-1/2  -right-20  cursor-pointer bg-black opacity-40 rounded-full 
            flex justify-center items-center px-3 py-3  text-white '>
            <FaChevronRight/> 
          </div>

    </div>
  )
}

export default Review