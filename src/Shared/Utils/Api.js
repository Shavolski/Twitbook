import React from "react";
import axios from "axios";

const base_URL = "http://jsonplaceholder.typicode.com";

const fetchUserData = async () => {
  return await axios.get(`${base_URL}/users`);
};

const fetchPostData = async () => {
  return await axios.get(`${base_URL}/posts`);
};

// const fetchSinglePost = async () => {
//   return await axios.get(`${base_URL}/posts/${id}`);
// };

export { fetchPostData, fetchUserData };
