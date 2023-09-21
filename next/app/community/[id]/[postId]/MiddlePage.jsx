"use client";

import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PostPage from "./PostPage";

export default function MiddlePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [postPerPage] = useState(6);
  useEffect(() => {
    const fetchPost = () => {
      fetch("/api/community/getList")
        .then((r) => r.json())
        .then((result) => {
          setPosts(result);
        });
    };
    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <PostPage post={currentPosts}></PostPage>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}
