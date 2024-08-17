import React from 'react'
import MainBlog from '../components/Blogs/MainBlog'
import ListBlogs from '../components/Blogs/ListBlogs'

const Blogs = () => {
  return (
    <div className='w-full py-6 mx-auto'>
      <div>
          <h1 className='pl-10 md:pl-60 mb-4 font-bold text-4xl   select-none text-cyan-500'>Blogs</h1>
          <p className='pl-10 md:pl-60 mb-4 font-bold italic text-gray-500'>Keep informed with our newest updates by joining our email list.</p>
      </div>

        <div className='flex flex-col gap-8  w-3/4 mx-auto'>
          <MainBlog/>
          <div>
            <ListBlogs/>
          </div>

        </div>
    </div>
  )
}

export default Blogs