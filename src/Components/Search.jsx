import React, { useEffect, useState } from 'react'
import { getSinglePost } from '../Store/Slices/postSlice';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Search = ({posts}) => {
    const [data, setdata] = useState("")

console.log(data);

   const filterdData=posts.filter((item)=>item.title.toLowerCase().includes(data.toLowerCase()))
console.log(filterdData);
//    const {id}=useParams()
   const dispatch= useDispatch()
   useEffect(()=>{
dispatch(getSinglePost())
   },[])
    
  return (
   <>
   <div className='m-2 '>
    
 
<form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" onChange={(e)=>setdata(e.target.value)} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
        {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>

{data && <section className='text-black bg-white space-y-4 m-4 z-50 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' >
  {filterdData.slice(0,10).map(({title,id})=>(
    <div key={id} className='hover:bg-gray-600 hover:text-white  '>
 <Link to={`/post/${id}`} className='capitalize ml-2 cursor-pointer  '  >{title}</Link>
 <hr />
 </div>
 ))}
</section>}
</div>


  
   
   
   </>
  )
}

export default Search