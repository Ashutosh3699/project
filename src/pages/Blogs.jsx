import React from 'react'
import MainBlog from '../components/Blogs/MainBlog'
import ListBlogs from '../components/Blogs/ListBlogs'

const Blogs = () => {
  return (
    <div>
      <div>
          <h1>Blogs</h1>
          <p>Get access to our latest news by signing up for our newsletter.</p>
      </div>

        <div>
        <MainBlog/>

        <div>
          <ListBlogs/>
        </div>

        </div>
    </div>
  )
}

export default Blogs