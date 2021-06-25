import React from "react";
import axios from "axios";

const base_URL = "http://jsonplaceholder.typicode.com";

const fetchUserData = async () => {
  return await axios.get(`${base_URL}/users`);
};

const fetchPostData = async () => {
  return await axios.get(`${base_URL}/posts`);
};

const fetchSinglePost = async (id) => {
  return await axios.get(`${base_URL}/posts/${id}`);
};

const fetchSingleUser = async (id) => {
  return await axios.get(`${base_URL}/users/${id}`);
};

export { fetchPostData, fetchUserData, fetchSinglePost, fetchSingleUser };
