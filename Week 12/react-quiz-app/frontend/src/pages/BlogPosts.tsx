import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e: any, pageNumber: number) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>My Blog Posts</h1>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
}
