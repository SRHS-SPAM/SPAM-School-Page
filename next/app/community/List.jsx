import styles from "./community.module.css";
import Eye from "../../public/svg/eye.svg";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function List({ result }) {
  let contents = [
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
  ];
  let db = (await connectDB).db("SRH-Community");
  let data = await db
    .collection("post")
    .find({ categoty: new ObjectId(result) })
    .sort({ good: -1 })
    .limit(5)
    .toArray();

  console.log(data);
  return (
    <>
      {contents.map((ai, i) => (
        <div className={styles.community_sub_article_content} key={i}>
          <div className={styles.community_sub_article_detail}>
            <div className={styles.community_sub_article_detail_left}>
              <div className={styles.community_sub_article_title}>
                {ai.title}
              </div>
            </div>
            <div className={styles.community_sub_article_detail_right}>
              <div className={styles.community_sub_article_views}>
                <Eye></Eye>
                <span className={styles.community_sub_article_views_value}>
                  {ai.views.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
