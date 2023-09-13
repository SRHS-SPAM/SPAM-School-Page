import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import style from "./community_detail.module.css";
import Sms from "../../../public/svg/sms.svg";
import LeftDoubleArrow from "../../../public/svg/leftDoubleArrow.svg";
import LeftArrow from "../../../public/svg/leftArrow.svg";
import RightDoubleArrow from "../../../public/svg/rightDoubleArrow.svg";
import RightArrow from "../../../public/svg/rightArrow.svg";
import Edit from "../../../public/svg/edit.svg";
import Swap from "../../../public/svg/swap.svg";

export default function Detail() {
  let info = [
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "지공",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "1231",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "10313",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
    {
      no: "공지",
      emoji: <Sms></Sms>,
      title: "Lorem ipsum dolor sit amet",
      writer: "msg2324",
      date: "2023/12/13",
      views: 27178,
      good: 31,
    },
  ];
  let category = [
    "전체",
    "소통",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
    "전체",
  ];
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
                서로고 베스트
              </div>
            </div>
            <div className={style.community_detail_divider1} />
            <div className={style.community_detail_selc_box}>
              <div className={style.community_detail_selc}>
                {category.map((ai, i) => (
                  <div className={style.selc_btn}>
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
                  <Edit></Edit>
                  <Link href="writing.html">
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
            <div className={style.writing_main_box}>
              {info.map((ai, i) => (
                <div className={style.writing_main_class}>
                  <div
                    className={`${style.main_class_name} ${style.main_class_num}`}
                  >
                    {ai.no}
                  </div>
                  <div
                    className={`${style.main_class_name} ${style.class_title}`}
                  >
                    <Sms></Sms>
                    <span>{ai.title}</span>
                  </div>
                  <div
                    className={`${style.main_class_name} ${style.main_class_au}`}
                  >
                    {ai.writer}
                  </div>
                  <div
                    className={`${style.main_class_name} ${style.class_date}`}
                  >
                    {ai.date}
                  </div>
                  <div
                    className={`${style.main_class_name} ${style.class_view}`}
                  >
                    {ai.views}
                  </div>
                  <div
                    className={`${style.main_class_name} ${style.class_reco}`}
                  >
                    {ai.good}
                  </div>
                </div>
              ))}
              <div className={style.writing_footer}>
                <div className={style.writing_footer_box}>
                  <div className={style.writing_button}>
                    <Link href="../../writing">
                      <div className={style.writing_button_Text}>
                        {/*<i className="fa-regular fa-pen-to-square" />*/}
                        글쓰기
                      </div>
                    </Link>
                  </div>
                  <div className={style.writing_search}>
                    <div className={style.writing_search_box}>
                      <div className={style.writing_search_input}>
                        <input type="text" />
                      </div>
                      <div className={style.writing_search_text}>검색</div>
                    </div>
                  </div>
                  <div className={style.page_selector}>
                    <div className={style.page_selector_box}>
                      <div className={style.community_pages}>
                        <LeftDoubleArrow></LeftDoubleArrow>
                      </div>
                      <div className={style.community_pages}>
                        <LeftArrow></LeftArrow>
                      </div>
                      <div className={style.community_pages}>10</div>
                      <div className={style.community_pages}>9</div>
                      <div className={style.community_pages}>8</div>
                      <div className={style.community_pages}>7</div>
                      <div className={style.community_pages}>6</div>
                      <div className={style.community_pages}>5</div>
                      <div className={style.community_pages}>4</div>
                      <div className={style.community_pages}>3</div>
                      <div className={style.community_pages}>2</div>
                      <div className={style.community_pages}>1</div>
                      <div className={style.community_pages}>
                        <RightArrow></RightArrow>
                      </div>
                      <div className={style.community_pages}>
                        <RightDoubleArrow></RightDoubleArrow>
                      </div>
                      {/*<i className="community_pages fa-solid fa-chevron-right" />*/}
                      {/*<i className="community_pages fa-solid fa-angles-right" />*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
