import React from 'react'
import { Link } from 'react-router-dom'

const Navabr = () => {
  return (
   <>
<div className="sticky top-0 z-30  h-16 w-full flex justify-evenhy items-center bg-gray-600 
       shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3) ] font-Anton flex justify-around items-center text-white"> 
    <Link to="/">Home</Link>
   
    <Link to="/add-post" relative='path'>Post</Link>
</div>
   </>
  )
}

export default Navabr