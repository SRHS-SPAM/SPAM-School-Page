"use client";

import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Post from "./Post";
import style from "./community_detail.module.css";
import Link from "next/link";
import LeftDoubleArrow from "../../../public/svg/leftDoubleArrow.svg";
import LeftArrow from "../../../public/svg/leftArrow.svg";
import RightDoubleArrow from "../../../public/svg/rightDoubleArrow.svg";
import RightArrow from "../../../public/svg/rightArrow.svg";

export default function MiddlePage({ id, name }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [postPerPage] = useState(5);
  useEffect(() => {
    const fetchPost = () => {
      fetch("/api/community/getList?id=" + id)
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
      <div className={style.writing_main_box}>
        <Post name={name} post={currentPosts}></Post>
        <div className={style.writing_footer}>
          <div className={style.writing_footer_box}>
            <div className={style.writing_button}>
              <Link href="../../writing">
                <div className={style.writing_button_Text}>
                  {/*<i className="fa-regular fa-pen-to-square" />*/}
                  글쓰기
                </div>
              </Link>
            </div>
            <div className={style.writing_search}>
              <div className={style.writing_search_box}>
                <div className={style.writing_search_input}>
                  <input type="text" />
                </div>
                <div className={style.writing_search_text}>검색</div>
              </div>
            </div>
            <div className={style.page_selector}>
              <div className={style.page_selector_box}>
                <div className={style.community_pages}>
                  <LeftDoubleArrow></LeftDoubleArrow>
                </div>
                <div className={style.community_pages}>
                  <LeftArrow></LeftArrow>
                </div>

                <Pagination
                  postPerPage={postPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                ></Pagination>

                <div className={style.community_pages}>
                  <RightArrow></RightArrow>
                </div>
                <div className={style.community_pages}>
                  <RightDoubleArrow></RightDoubleArrow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
