"use client";

import { useEffect, useState } from "react";
import styles from "./writing_detail.module.css";

export default function Comment(props) {
  const [data, setData] = useState([]);

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
              <div className={styles.write_d_reply}>
                <div className={styles.write_d_reply_left}>
                  <img src="../../../../public/images/profile.png" />
                </div>
                <div className={styles.write_d_reply_right}>
                  <div className={styles.write_d_reply_username}>
                    {ai.writer}
                  </div>
                  <div className={styles.write_d_reply_main}>{ai.comment}</div>
                  <div className={styles.write_d_reply_date}>
                    {datePart} {timePart} 답글쓰기
                  </div>
                </div>
              </div>
            );
          } else {
            /*<!--답글 시작 부분-->*/
            return (
              <div className={styles.write_d_comment}>
                <div className={styles.write_d_reply}>
                  <div className={styles.write_d_reply_left}>
                    <img src="../../../../public/images/profile.png" />
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
        {/*<!--답글 시작 부분-->*/}
      </div>
    </>
  );
}
