import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import style from "./community_detail.module.css";
import Edit from "../../../public/svg/edit.svg";
import Swap from "../../../public/svg/swap.svg";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import MiddlePage from "./MiddlePage";

export default async function Detail(props) {
  let db = (await connectDB).db("SRH-Community");
  let result = await db
    .collection("category")
    .findOne(
      { _id: new ObjectId(props.params.id) },
      { _id: 1, title: 1, tag: 1 }
    );

  return (
    <>
      {/* header */}
      <header className={style.community_detail_header}>
        <div className={style.community_detail_inner}>
          <div className={style.community_detail_actions}>
            <Arrow location="/community" mod={2}></Arrow>
            <div className={style.community_detail_menu}>
              <div className={style.community_detail_menu_wrap}>
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main */}
      <div className={style.community_detail_main}>
        <div className={style.community_detail_home}>
          <div className={style.community_detail_upper}>
            <div className={style.community_detail_title}>
              <div className={style.community_detail_title_text}>
                {result.title} 게시판
              </div>
            </div>
            <div className={style.community_detail_divider1} />
            <div className={style.community_detail_selc_box}>
              <div className={style.community_detail_selc}>
                {result.tag.map((ai, i) => (
                  <div className={style.selc_btn} key={i}>
                    <span>{ai}</span>
                  </div>
                ))}
              </div>
              <div className={style.selc_devider} />
              <div className={style.selc_func}>
                <div className={style.selc_sort}>
                  <Swap></Swap>
                  <div className={style.sort_type}>최신순</div>
                </div>
                <div className={style.selc_write}>
                  <Link href="/writing">
                    <Edit></Edit>
                  </Link>
                  <Link href="/writing">
                    <div className={style.selc_write_text}>글쓰기</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.community_detail_divider2} />
            <div className={style.writing_class}>
              <div className={`${style.class_name} ${style.class_num}`}>
                번호
              </div>
              <div className={`${style.class_name} ${style.class_title}`}>
                제목
              </div>
              <div className={`${style.class_name} ${style.class_au}`}>
                작성자
              </div>
              <div className={`${style.class_name} ${style.class_date}`}>
                작성일
              </div>
              <div className={`${style.class_name} ${style.class_view}`}>
                조회수
              </div>
              <div className={`${style.class_name} ${style.class_reco}`}>
                추천
              </div>
            </div>
            <div className={style.community_detail_divider3} />
          </div>
          {/* write main */}
          <div className={style.community_detail_writing_main}>
            <MiddlePage id={props.params.id} name={result.title}></MiddlePage>
          </div>
        </div>
      </div>
    </>
  );
}
