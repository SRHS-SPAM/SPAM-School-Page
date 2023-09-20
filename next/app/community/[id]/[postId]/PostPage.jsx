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
    while (data.length < 6) {
      data.push({});
    }
  } else {
    let db = (await connectDB).db("SRH-Community");
    data = await db
      .collection("post")
      .find({ category: new ObjectId(props.id) })
      .sort({ good: -1 })
      .limit(6)
      .toArray();
    while (data.length < 6) {
      data.push({});
      console.log(date);
    }
  }
  return (
    <div className={styles.write_d_post_list_main}>
      {data.map((ai, i) => {
        // let [datePart, timePart] = ai.date.split(";");
        return (
          <div className={styles.write_d_post_list_object} key={i}>
            <div className={styles.write_d_post_list_category}>공지</div>
            <div className={styles.write_d_post_list_title}>{ai.title}</div>
            <div className={styles.write_d_post_list_username}>{ai.writer}</div>
            {/* <div className={styles.write_d_post_list_date}>{datePart}</div> */}
            <div className={styles.write_d_post_list_view}>1324</div>
            <div className={styles.write_d_post_list_thumbsup}>3</div>
          </div>
        );
      })}

      <div className={styles.write_d_post_list_object}>
        <div className={styles.write_d_post_list_category}>공지</div>
        <div className={styles.write_d_post_list_title}>아 재윤국 시발시치</div>
        <div className={styles.write_d_post_list_username}>
          우주갓겜 이터널리턴
        </div>
        <div className={styles.write_d_post_list_date}>2023.09.19</div>
        <div className={styles.write_d_post_list_view}>1324</div>
        <div className={styles.write_d_post_list_thumbsup}>3</div>
      </div>
      <div className={styles.write_d_post_list_object}>
        <div className={styles.write_d_post_list_category}>베스트</div>
        <div className={styles.write_d_post_list_title}>
          정실은 니노라고 시발
        </div>
        <div className={styles.write_d_post_list_username}>정삼복</div>
        <div className={styles.write_d_post_list_date}>2023.09.19</div>
        <div className={styles.write_d_post_list_view}>1334</div>
        <div className={styles.write_d_post_list_thumbsup}>10</div>
      </div>
      <div className={styles.write_d_post_list_object}>
        <div className={styles.write_d_post_list_category}>자유</div>
        <div className={styles.write_d_post_list_title}>
          아무리 봐도 정실은 이츠키다
        </div>
        <div className={styles.write_d_post_list_username}>마시쪄</div>
        <div className={styles.write_d_post_list_date}>2023.09.19</div>
        <div className={styles.write_d_post_list_view}>1324</div>
        <div className={styles.write_d_post_list_thumbsup}>15</div>
      </div>
      <div className={styles.write_d_post_list_object}>
        <div className={styles.write_d_post_list_category}>자유</div>
        <div className={styles.write_d_post_list_title}>
          근데 나는 미쿠가 좋음
        </div>
        <div className={styles.write_d_post_list_username}>
          이소상 무공주머니
        </div>
        <div className={styles.write_d_post_list_date}>2023.09.19</div>
        <div className={styles.write_d_post_list_view}>135434</div>
        <div className={styles.write_d_post_list_thumbsup}>-5</div>
      </div>
      <div className={styles.write_d_post_list_object}>
        <div className={styles.write_d_post_list_category}>자유</div>
        <div className={styles.write_d_post_list_title}>
          각청 죽순 쭈왑 쭈왑 와랄랄라 마렵다
        </div>
        <div className={styles.write_d_post_list_username}>마시쪄</div>
        <div className={styles.write_d_post_list_date}>2023.09.19</div>
        <div className={styles.write_d_post_list_view}>13234</div>
        <div className={styles.write_d_post_list_thumbsup}>-1972</div>
      </div>
    </div>
  );
}
