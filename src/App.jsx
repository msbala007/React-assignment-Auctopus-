import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import Navabr from "./Components/Navbar/Navabr";

import Search from "./Components/Search";
import FetchPosts from "./Components/Posts/FetchPosts";
import { Route, Routes } from "react-router-dom";
import AddPosts from "./Components/Posts/AddPosts";
import ReadPost from "./Components/Posts/ReadPost";


function App() {

  // const {posts}=useSelector(state=>state.posts)
    
 
  // const dispatch = useDispatch()
  // useEffect(()=>{
  
  // dispatch(getPosts())
  // },[])
  

  
    return (
    <>
      <div className="bg-gray-200 font-Carter max-w-screen-2xlmin-h-screen"> 
      <Navabr />
      <Routes>
      <Route path="/" element={<> <FetchPosts />

      </>}  />
        {/* <Route path="/posts" element={<FetchPosts />}  /> */}
        <Route path="/add-post" element={<AddPosts />} />
        <Route path="/post/:id" element={<ReadPost />} />
        <Route path="/post/:id" element={<Search />} />
      </Routes>
       
        
       
      </div>
    </>
  )
}

export default App
