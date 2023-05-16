import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"

import { getPosts } from '../../Store/Slices/postSlice';
import Posts from './Posts';
import Search from '../Search';

const FetchPosts = () => {
  const [increment, setincrement] = useState(9)
    const {posts}=useSelector(state=>state.posts)

    const data=[...posts].sort((a,b)=>b.id-a.id)
    // console.log(posts);
    const state=useSelector(state=>state)
    
    console.log(state);
 
    const dispatch = useDispatch()
    useEffect(()=>{
    
    dispatch(getPosts())
    },[])

    const fetchMorePost =()=>{
      setincrement(increment + 10)
    }
  return (
   <>
   <div>
    <div className='mt-6'>  <Search posts={posts} /></div>
  
  <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
   
    {data.slice(0,increment).map(({userId,id,title,body})=>(
      <div key={id}>
    
    <Posts id={id} title={title} body={body} userId={userId} />
    </div>
    )
      
    )}
   
  </div>
  <div className="flex justify-center p-4">
        <button
          onClick={fetchMorePost}
          className="bg-black px-6 py-2 rounded-xl text-white animate-bounce   "
        >
          Loading more<span className="">.....</span>
        </button>
      </div>
  </div>
   
   </>
  )
}

export default FetchPosts