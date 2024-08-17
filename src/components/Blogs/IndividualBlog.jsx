import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {blogObject} from "../Blogs/BlogContent"

const IndividualBlog = () => {

    const  {id} = useParams();
    console.log("user id is ", id)
    const [post, setPost] = useState();

    const [loading,setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        console.log(blogObject.mainBlog)
        setPost(blogObject.mainBlog);
        
        for (let i=0; i<blogObject.listBlogs.length; i++) {
            
            console.log(blogObject.listBlogs[i].id);
            if(blogObject.listBlogs[i].id == id){
                setPost(blogObject.listBlogs[i]);
            }
        }

        setLoading(false);
    }, [id]);
    
    console.log(loading);
    console.log("object post is   ",post);

  return (
    <div className='select-none'>
        {
            loading ? (<div>Loading...</div>) : ( <div className='w-11/12 md:w-3/4 mx-auto  my-16 '>
            
            <div>
                <h2 className='text-2xl md:text-5xl text-zinc-600 font-bold'>{post.name}</h2>

                  <div className='italic  text-sm text-zinc-400 font-semibold my-3 pl-3 mb-6'>
                      <p>{post.author} <span>{post.Date}</span> </p>
                  </div>

                <div className='md:w-3/4 mb-4 w-[95%]  mx-auto'>
                    <img src={post.image} alt='blogImage' width={700}/>
                </div>


                  <div className='md:w-[90%]  bg-white  border border-gray-200 shadow-inner rounded-2xl px-4 py-4 mt-3'>
                        {
                            post.content.map((item,index) => {

                                return <div key={index}>
                                        <div className=' text-xl md:text-3xl text-zinc-600 font-bold mb-3'>
                                            { item.question}
                                        </div>
                                        <div className='text-md md:text-lg text-zinc-500 font-sans mb-4'>
                                            {item.answer}
                                        </div>
                                </div>
                            })
                        }
                  </div>
            </div> 

    </div>)
        }
    </div>
  )
}

export default IndividualBlog