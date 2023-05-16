import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import postReducer from "./Slices/postSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },

});

export default store;
