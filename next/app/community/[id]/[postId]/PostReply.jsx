"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import ImageSvg from "../../../../public/svg/image.svg";
import Smile from "../../../../public/svg/smile.svg";
import styles from "./writing_detail.module.css";

export default function PostReply(props) {
  const [comment, setComment] = useState("");
  return (
    <div className={styles.write_d_comment_detail_main}>
      <div className={styles.write_d_comment_detail_input}>
        <input
          className={`${styles.set_input} ${styles.set_info_input}`}
          type="text"
          placeholder="여기에 댓글을 남겨보세요!"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <div className={styles.comment_detail_sub}>
        <div className={styles.comment_detail_sub_1}>
          {/*<i className={`${styles.fa-regular} ${styles.fa-image}`}></i>*/}
          <ImageSvg></ImageSvg>
          {/*<i className={`${styles.fa-regular} ${styles.fa-face-smile}`}></i>*/}
          <Smile></Smile>
        </div>
        <div className={styles.comment_detial_sub_2}>
          <button
            onClick={() => {
              if (comment == "") {
                window.alert("댓글을 입력해주세요!");
              } else {
                fetch("/api/comment/new ", {
                  method: "POST",
                  body: JSON.stringify({
                    comment: comment,
                    _id: props.post,
                    parentId: props.id,
                    name: props.name,
                  }),
                });
              }
            }}
          >
            작성
          </button>
        </div>
      </div>
    </div>
  );
}
