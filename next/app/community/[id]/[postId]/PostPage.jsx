import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import styles from "./writing_detail.module.css";

export default async function PostPage(props) {
  let data;
  if (props.name == "서로고") {
    let db = (await connectDB).db("SRH-Community");
    data = await db
      .collection("post")
      .find()
      .sort({ good: -1 })
      .limit(6)
      .toArray();
  } else {
    let db = (await connectDB).db("SRH-Community");
    data = await db
      .collection("post")
      .find({ category: new ObjectId(props.id) })
      .sort({ good: -1 })
      .limit(6)
      .toArray();
  }
  return (
    <div className={styles.write_d_post_list_main}>
      {data.map((ai, i) => {
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
