import styles from "./writing_detail.module.css";
import ThumbsUp from "../../../../public/svg/thumbsUp.svg";
import ThumbsDown from "../../../../public/svg/thumbsDown.svg";
import CommentSvg from "../../../../public/svg/comment.svg";
import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import PostReply from "./PostReply";
import PostPage from "./PostPage";
import Pagination from "./Pagination";
import MiddlePage from "./MiddlePage";

export default async function Post(props) {
  let session = await getServerSession(authOptions);
  let db = (await connectDB).db("SRH-Community");
  let data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.postId) });
  data._id = data._id.toString();
  data.category = data.category.toString();
  let image = data.image == "" ? "/images/profile.png" : data.image;

  let [datePart, timePart] = data.date.split(";");
  datePart = datePart.replace(/\//g, ".");

  return (
    <div>
      <header className={styles.cafe_header}>
        <div className={styles.cafe_inner}>
          <div className={styles.cafe_actions}>
            <Arrow location={"/community/" + data.category} mod={2} />
            <div className={styles.cafe_menu}>
              <div className={styles.cafe_menu_wrap}>
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.write_d_main_container}>
          <div className={styles.write_d_main_top}>
            <div className={styles.write_d_board}>
              <Link href={"/community/" + data.category}>
                {props.searchParams.name} 게시판
              </Link>
            </div>
            <div className={styles.write_d_title}>{data.title}</div>
            <div className={styles.write_d_userinfo}>
              <div className={styles.write_d_user_img}>
                <img src={image} />
              </div>
              <div className={styles.write_d_user_subbox}>
                <div className={styles.write_d_user_name}>{data.writer}</div>
                <div className={styles.write_d_date}>
                  {datePart} {timePart} 조회 {data.views}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.write_d_main}>
            <div className={styles.write_d_writing}>
              {/* <div className={styles.write_d_writing_img}>
                <img src="/images/etsuki.png" />
              </div>
              <div className={styles.write_d_writing_bottom}>
                <div className={styles.write_d_text}>정실은 이츠키</div>
              </div> */}
              <div className={styles.write_d_writing_main}>{data.content}</div>
              <div className={styles.write_d_writing_usermore}>
                <div className={styles.write_d_usermore_img}>
                  <img src={image} />
                </div>
                <div className={styles.write_d_usermore_subbox}>
                  <div className={styles.write_d_usermore_name}>
                    {data.writer}
                  </div>
                  <div className={styles.write_d_user_name_sub}>
                    님의 게시글 더 보기
                  </div>
                </div>
              </div>
              <div className={styles.write_d_write_info}>
                <div className={styles.write_d_thumbs_up}>
                  {/*<i className={`${styles.fa-regular} ${styles.fa-thumbs-up}`}></i>*/}
                  <ThumbsUp></ThumbsUp>
                  추천 {data.good}
                </div>
                <div className={styles.write_d_thumbs_down}>
                  {/*<i className={`${styles.fa-regular} ${styles.fa-thumbs-down}`}></i>*/}
                  <ThumbsDown></ThumbsDown>
                  비추천 {data.bad}
                </div>
                <div className={styles.write_d_reply_count}>
                  {/*<i className={`${styles.fa-regular} ${styles.fa-comment}`}></i>*/}
                  <CommentSvg></CommentSvg>
                  댓글 {data.comment}
                </div>
              </div>
              <div className={styles.write_d_reply_list}>
                <div className={styles.write_d_reply_top}>
                  댓글
                  <div className={styles.write_d_reply_sort}>
                    <div className={styles.enabled_sort}>등록순</div>
                    <div className={styles.disabled_sort}>최신순</div>
                  </div>
                </div>
                <div className={styles.write_d_reply_list_sub}>
                  <Comment _id={data._id} name={session.user.name}></Comment>
                </div>
              </div>
              <div className={styles.write_d_reply_writing}>
                <div className={styles.write_d_username}>
                  {session.user.name}
                </div>
                <div className={styles.write_d_comment_detail}>
                  <PostReply
                    post={data._id}
                    id={data.category}
                    name={props.searchParams.name}
                  ></PostReply>
                </div>
              </div>
              <div className={styles.write_d_reply_writing_sub}>
                <div className={styles.write_d_reply_writing_sub_write}>
                  글쓰기
                </div>
                <div className={styles.write_d_reply_writing_sub_comment}>
                  답글
                </div>
              </div>
              <div className={styles.write_d_post_list}>
                <div className={styles.write_d_post_list_top}>전체 글</div>
                <MiddlePage></MiddlePage>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
