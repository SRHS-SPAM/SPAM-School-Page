import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import style from "./community_detail.module.css";
import Sms from "../../../public/svg/sms.svg";

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
  ];
  return (
    <>
      {/* header */}
      <header className={style.community_detail_header}>
        <div className={style.community_detail_inner}>
          <div className={style.community_detail_actions}>
            <Arrow location="/community"></Arrow>
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
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
                <div className={style.selc_btn}>
                  <span>전체</span>
                </div>
              </div>
              <div className={style.selc_devider} />
              <div className={style.selc_func}>
                <div className={style.selc_sort}>
                  {/*<i className="fa-solid fa-right-left fa-rotate-90" />*/}
                  <div className={style.sort_type}>최신순</div>
                </div>
                <div className={style.selc_write}>
                  {/*<i className="fa-solid fa-pencil" />*/}
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
              {}
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  <Sms></Sms>
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
              <div className={style.writing_main_class}>
                <div
                  className={`${style.main_class_name} ${style.main_class_num}`}
                >
                  공지
                </div>
                <div
                  className={`${style.main_class_name} ${style.class_title}`}
                >
                  {/*<i className="fa-regular fa-comments" />*/}
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div
                  className={`${style.main_class_name} ${style.main_class_au}`}
                >
                  msg2324
                </div>
                <div className={`${style.main_class_name} ${style.class_date}`}>
                  20XX.XX.XX
                </div>
                <div className={`${style.main_class_name} ${style.class_view}`}>
                  12345
                </div>
                <div className={`${style.main_class_name} ${style.class_reco}`}>
                  12
                </div>
              </div>
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
                      <div className={style.community_pages}>1</div>
                      <div className={style.community_pages}>2</div>
                      <div className={style.community_pages}>3</div>
                      <div className={style.community_pages}>4</div>
                      <div className={style.community_pages}>5</div>
                      <div className={style.community_pages}>6</div>
                      <div className={style.community_pages}>7</div>
                      <div className={style.community_pages}>8</div>
                      <div className={style.community_pages}>9</div>
                      <div className={style.community_pages}>10</div>
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
