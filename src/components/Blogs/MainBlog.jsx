import React from 'react'
import {blogObject} from "../Blogs/BlogContent"
import { Link } from 'react-router-dom';

const MainBlog = () => {

    console.log(blogObject);

  return (
    <div  >
        <Link  to={`/blogs/${blogObject.mainBlog.id}`}>

         Mainblogs
        </Link>
        
    </div>
  )
}

export default MainBlog