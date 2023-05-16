import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../API/posts";
import axios from "axios";

const initialState = {
  status: "idle",
  posts: [],
  post: [],
  newPost: [],
  error: null,
};
console.log(initialState);
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});
export const getSinglePost = createAsyncThunk(
  "posts/getSinglePosts",
  async (id) => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data);
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  console.log("clicked");
  return await axios
    .post("https://jsonplaceholder.typicode.com/posts", post)
    .then((res) => res.data);
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  console.log("post Deleted");
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(getSinglePost.fulfilled, (state, action) => {
        state.status = "success";
        state.post = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post) => post.id !== action.payload
        );
      });
  },
});

// export const selectPosts = (state) => state.posts.;
// console.log(selectPosts);
// export const selectPostsStatus = (state) => state.posts.status;
// export const selectPostsError = (state) => state.posts.error;

export default postSlice.reducer;
