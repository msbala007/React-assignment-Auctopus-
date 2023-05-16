import React, { useState } from 'react';
import { addPost } from '../../Store/Slices/postSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddPosts=()=> {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('')
 

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
const handeAuthorChange=(event)=>{
setUserId(event.target.value)
}  
const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  const post = {
    title,
    body: description,
    userId: 1,
  };



const dispatch=useDispatch()
const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send data to server here
    if(!title || !description || !userId){
      return;
    }
 dispatch(addPost(post))
 navigate("/")
 

    
  };

  return (
    <>
 

<div className="min-h-screen w-full p-6 ">
        <form onSubmit={handleSubmit} className="  ">
          <div className="min-h-screen flex  flex-col justify-evenly xl:space-y-2 lg:space-y-2">
            <h1 className="flex justify-center mb-8 text-2xl font-bold">Add Post</h1>
            <label className="text-2xl font-bold">Title</label>
            <input
              type="text"
              placeholder="Title"
              name="name"
              value={title} onChange={handleTitleChange}
              className="w-full py-2 text-black  bg-transparent  outline-none
                border-gray-500 border rounded-xl px-6"
            />
            <label className="text-2xl font-bold">Author</label>
            <input
              type="text"
              placeholder="author"
              name="name"
              value={userId} onChange={handeAuthorChange}
              className="w-full py-2 text-black  bg-transparent  outline-none
                border-gray-500 border rounded-xl px-6"
            />
            <label className="text-2xl font-bold">Description</label>

            <textarea
              type="text"
              placeholder="Share your story...."
              value={description}
               onChange={handleDescriptionChange}
              
              rows="5"
              cols="30"
              className="w-full py-2 text-black  bg-transparent  outline-none
               border-gray-500 border rounded-xl px-6"
            />

            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 focus:ring-1 hover:from-pink-500 hover:to-orange-400
              hover:text-white p-2 rounded-xl text-black font-bold text-sm w-1/2 mx-auto mt-4"
            >
              Publish
            </button>
          </div>
        </form>
      </div>

    </>
   
  );
}

export default AddPosts


