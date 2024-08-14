import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {blogObject} from "../Blogs/BlogContent"

const IndividualBlog = (props) => {

    // const [postId, setPostId] = useState("");

    const  {id} = useParams();
    console.log("userid is ",id);

    const [post, setPost] = useState({});

    useEffect(() => {
        
        if(blogObject.mainBlog.id === id){
            setPost(blogObject.mainBlog);
        }
        else{

            for (const element of blogObject.listBlogs) {
                
                if(element.id === id){
                    setPost(blogObject.mainBlog);
                }
            }
        }

    }, [id])
    
    console.log(post);

  return (
    <div>
        IndividualBlog
    </div>
  )
}

export default IndividualBlog