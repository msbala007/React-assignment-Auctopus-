import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSinglePost } from '../../Store/Slices/postSlice'

const ReadPost = () => {
    const {id}=useParams()
    const posts=useSelector(state=>state.posts.post)

console.log(posts);
     
   const dispatch= useDispatch()
   useEffect(()=>{
dispatch(getSinglePost(id))
   },[])
  return (
<>
 <div className='flex justify-center flex-col min-h-screen space-y-6 p-4 '>
   <h1 className='font-bold text-lg capitalize text-start flex justify-center'>{posts.title}</h1>
   <p>{posts.body}</p>
<div className='flex justify-center'>
   <Link to="/" className='bg-black py-2 rounded-lg text-center  w-56 text-white flex justify-center'>Go back</Link>
   </div>
 </div>

</>
  )
}

export default ReadPost