"use client";

import styles from "./community_detail.module.css";
import RightDoubleArrow from "../../../public/svg/rightDoubleArrow.svg";
import RightArrow from "../../../public/svg/rightArrow.svg";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      {pageNumber.map((pageNum, i) => (
        <div
          className={styles.community_pages}
          key={i}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </div>
      ))}
    </>
  );
}
