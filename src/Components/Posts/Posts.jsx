import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from '../Popup'

const Posts = ({id,userId,title,body}) => {
  const [open, setopen] = useState(false)
 
  return (
<>
<div className=' w-full text-black py-2   '>
  <div className='bg-white flex flex-col m-2 p-2 space-y-4 rounded-lg min-h-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' >
    <h1 className='font-bold text-lg capitalize line-clamp-1'>{title}</h1>
    <p className='line-clamp-2'>{body}</p>
    <div className='flex justify-around '>
      <Link to={`/post/${id}`} className='bg-black py-2 rounded-lg text-center text-white px-4'>Read more</Link>
    <button onClick={()=>setopen(true)}  className='bg-black py-2 rounded-lg text-center text-white px-4'>Delete</button>
   
   {open ? <Popup 
   close={() => setopen(false)}
   id={id}
    blog={title} />: <></>}
    </div>
    
  </div>
</div>

</>
  )
}

export default Posts