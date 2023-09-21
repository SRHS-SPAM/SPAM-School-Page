"use client";
import styles from "./writing_detail.module.css";

export default function PostPage(props) {
  // if (props.name == "서로고") {

  // } else {
  //   let db = (await connectDB).db("SRH-Community");
  //   data = await db
  //     .collection("post")
  //     .find({ category: new ObjectId(props.id) })
  //     .sort({ good: -1 })
  //     .toArray();
  // }

  console.log(props.post);
  return (
    <div className={styles.write_d_post_list_main}>
      {props.post.map((ai, i) => {
        let [datePart, timePart] = ai.date.split(";");
        return (
          <div className={styles.write_d_post_list_object} key={i}>
            <div className={styles.write_d_post_list_category}>공지</div>
            <div className={styles.write_d_post_list_title}>{ai.title}</div>
            <div className={styles.write_d_post_list_username}>{ai.writer}</div>
            <div className={styles.write_d_post_list_date}>{datePart}</div>
            <div className={styles.write_d_post_list_view}>1324</div>
            <div className={styles.write_d_post_list_thumbsup}>3</div>
          </div>
        );
      })}
    </div>
  );
}
