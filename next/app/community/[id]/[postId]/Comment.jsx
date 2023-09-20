"use client";

import ImageSvg from "../../../../public/svg/image.svg";
import Smile from "../../../../public/svg/smile.svg";
import { useEffect, useState } from "react";
import styles from "./writing_detail.module.css";

export default function Comment(props) {
  const [data, setData] = useState([]);
  const [comment, setCommnet] = useState("");
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <>
      <div className={styles.write_d_reply_container}>
        {data.map((ai, i) => {
          let [datePart, timePart] = ai.date.split(";");
          datePart = datePart.replace(/\//g, ".");

          if (ai.parent === "") {
            /*<!--댓글 시작 부분-->*/
            return (
              <div key={i}>
                <div className={styles.write_d_reply}>
                  <div className={styles.write_d_reply_left}>
                    <img
                      src={ai.image == "" ? "/images/profile.png" : ai.image}
                    />
                  </div>
                  <div className={styles.write_d_reply_right}>
                    <div className={styles.write_d_reply_username}>
                      {ai.writer}
                    </div>
                    <div className={styles.write_d_reply_main}>
                      {ai.comment}
                    </div>
                    <div className={styles.write_d_reply_date}>
                      {datePart} {timePart}{" "}
                      <span onClick={() => setEnable((r) => !r)}>답글쓰기</span>
                    </div>
                  </div>
                </div>
                {/* {enable ? (
                  <div className={styles.write_d_reply_writing_s}>
                    <div className={styles.write_d_username}>{props.name}</div>
                    <div className={styles.write_d_comment_detail}>
                      <div className={styles.write_d_comment_detail_main}>
                        <div className={styles.write_d_comment_detail_input}>
                          <input
                            className={`${styles.set_input} ${styles.set_info_input}`}
                            type="text"
                            placeholder="댓글을 남겨보세요"
                          />
                        </div>
                        <div className={styles.comment_detail_sub}>
                          <div className={styles.comment_detail_sub_1}>
                            <ImageSvg></ImageSvg>
                            <Smile></Smile>
                          </div>
                          <div className={styles.comment_detial_sub_2}>
                            <button>작성</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )} */}
              </div>
            );
          } else {
            /*<!--답글 시작 부분-->*/
            return (
              <div className={styles.write_d_comment} key={i}>
                <div className={styles.write_d_reply}>
                  <div className={styles.write_d_reply_left}>
                    <img
                      src={ai.image == "" ? "/images/profile.png" : ai.image}
                    />
                  </div>
                  <div className={styles.write_d_reply_right}>
                    <div className={styles.write_d_reply_username}>
                      {ai.writer}
                    </div>
                    <div className={styles.write_d_reply_main}>
                      {ai.comment}
                    </div>
                    <div className={styles.write_d_reply_date}>
                      {datePart} {timePart} 답글쓰기
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
