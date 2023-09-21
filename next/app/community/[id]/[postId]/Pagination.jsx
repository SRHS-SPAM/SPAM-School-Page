"use client";

import styles from "./writing_detail.module.css";
import RightDoubleArrow from "../../../../public/svg/rightDoubleArrow.svg";
import RightArrow from "../../../../public/svg/rightArrow.svg";

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.page_selector}>
      <div className={styles.page_selector_box}>
        {pageNumber.map((pageNum, i) => (
          <div
            className={styles.community_pages}
            key={i}
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </div>
        ))}

        <RightArrow className={styles.community_pages}></RightArrow>
        <RightDoubleArrow className={styles.community_pages}></RightDoubleArrow>
      </div>
    </div>
  );
}
