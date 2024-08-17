import React from 'react'
import {blogObject} from "../Blogs/BlogContent"
import { Link } from 'react-router-dom';

const MainBlog = () => {

    // console.log(blogObject);
    const info = blogObject.mainBlog;
    // console.log(info);

  return (
    <div  >
        <Link  to={`/blogs/${info.id}`}>

         <div className='flex flex-col md:flex-row rounded-xl overflow-hidden  w-11/12 mx-auto  mt-4  bg-zinc-100 shadow-inner  '>
            <div className='w-full lg:w-2/3 xl:w-1/2 object-contain'>
              <img src={info.image} alt='blogImage' className=' '/>
            </div>
            <div  className='w-full md:w-1/2 px-1 md:px-4 space-y-3 py-2  flex flex-col items-center'>
                <h2  className='text-xl xl:text-3xl font-bold  text-zinc-600'>{info.name}</h2>

                  <div className='italic  text-sm text-zinc-400 font-semibold '>
                      <p >{info.author} <span>{info.Date}</span> </p>
                  </div>

                  <div className='px-2 text-sm xl:text-lg text-zinc-500 font-sans'>
                    <p>{`${info.content[0].answer.substring(0,150)}...`}</p>
                  </div>
            </div> 

         </div>
        </Link>
        
    </div>
  )
}

export default MainBlog