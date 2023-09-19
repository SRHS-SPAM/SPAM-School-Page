import styles from "./community.module.css";
import Eye from "../../public/svg/eye.svg";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function List({ result }) {
  let db = (await connectDB).db("SRH-Community");
  let data = await db
    .collection("post")
    .find({ category: new ObjectId(result) })
    .sort({ good: -1 })
    .limit(5)
    .toArray();
  return (
    <>
      {data.map((ai, i) => (
        <div className={styles.community_sub_article_content} key={i}>
          <div className={styles.community_sub_article_detail}>
            <div className={styles.community_sub_article_title}>{ai.title}</div>
          </div>
        </div>
      ))}
    </>
  );
}
