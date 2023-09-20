"use client";

import Pagination from "./Pagination";
import PostPage from "./PostPage";

export default function MiddlePage({ result }) {
  let currentPage = 1;
  let postPerPage = 6;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => (currentPage = pageNumber);
  return (
    <div>
      <PostPage
        name={props.searchParams.name}
        id={props.params.postId}
        category={data.category}
        result={result}
        post={currentPosts}
      ></PostPage>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={result.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}
