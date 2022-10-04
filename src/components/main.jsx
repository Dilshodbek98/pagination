import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import Posts from "./Posts";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
    console.log(number);
  };

  return (
    <div>
      <h1 style={{ marginLeft: "60px" }}>My Blog</h1>
      <Posts posts={currentsPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        total={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Main;
