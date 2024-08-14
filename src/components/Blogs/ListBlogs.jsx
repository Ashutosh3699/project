import React from 'react';
import {blogObject} from "../Blogs/BlogContent"
import { Link } from 'react-router-dom';

const ListBlogs = () => {

    const list = blogObject.listBlogs;

  return (
    <div>

        {
            list.map((item,index) =>{
                return <Link key={index} to={`/blogs/${item.id}`}>
                        <div>
                            <h2>{item.name}</h2>
                        </div>
                </Link>
            })
        }
    
    </div>
  )
}

export default ListBlogs