import axios from "axios";

export const fetchPosts = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log("hiiii from posts");
    return response.json();
  };

