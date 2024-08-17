import React from 'react';
import {blogObject} from "../Blogs/BlogContent"
import { Link } from 'react-router-dom';

const ListBlogs = () => {

    const list = blogObject.listBlogs;

  return (
    <div className='flex  w-11/12 flex-wrap gap-6 mx-auto md:flex-row  flex-col' >

        {
            list.map((item,index) =>{
                return <Link key={index} to={`/blogs/${item.id}`} className='flex flex-col gap-2 overflow-hidden w-[100%] 
                md:w-[31%] rounded-lg  bg-zinc-100 shadow-inner'>
                                <div className='w-full overflow-hidden'>
                                <img src={item.image} alt='blogImage'/>
                                </div>
                                <div className='w-11/12 mx-auto py-3'>
                                    <h2 className='text-xl md:text-2xl font-bold  text-zinc-600'>{item.name}</h2>

                                    <div className='italic  text-sm text-zinc-400 font-semibold'>
                                        <p>{item.author} <span>{item.Date}</span> </p>
                                    </div>

                                    <div className=' text-sm md:text-md text-zinc-500 font-sans'>
                                        <p>{`${item.content[0].answer.substring(0,150)} ...`}</p>
                                    </div>
                                </div> 
                </Link>
            })
        }
    
    </div>
  )
}

export default ListBlogs