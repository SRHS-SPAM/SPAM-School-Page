import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";

export default function Detail() {
  return (
    <>
      {/* header */}
      <header className="community_detail_header">
        <div className="community_detail_inner">
          <div className="community_detail_actions">
            <Arrow></Arrow>
            <div className="community_detail_menu">
              <div className="community_detail-menu-wrap">
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main */}
      <div className="community_detail_main">
        <div className="community_detail_home">
          <div className="community_detail_upper">
            <div className="community_detail_title">
              <div className="community_detail_title_text">서로고 베스트</div>
            </div>
            <div className="community_detail_divider1" />
            <div className="community_detail_selc_box">
              <div className="community_detail_selc">
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
                <div className="selc_btn">
                  <span>전체</span>
                </div>
              </div>
              <div className="selc_devider" />
              <div className="selc_func">
                <div className="selc_sort">
                  <i className="fa-solid fa-right-left fa-rotate-90" />
                  <div className="sort_type">최신순</div>
                </div>
                <div className="selc_write">
                  <i className="fa-solid fa-pencil" />
                  <Link href="writing.html">
                    <div className="selc_write_text">글쓰기</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="community_detail_divider2" />
            <div className="writing_class">
              <div className="class_name class_num">번호</div>
              <div className="class_name class_title">제목</div>
              <div className="class_name class_au">작성자</div>
              <div className="class_name class_date">작성일</div>
              <div className="class_name class_view">조회수</div>
              <div className="class_name class_reco">추천</div>
            </div>
            <div className="community_detail_divider3" />
          </div>
          {/* write main */}
          <div className="community_detail_writing_main">
            <div className="writing_main_box">
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_main_class">
                <div className="main_class_name main_class_num">공지</div>
                <div className="main_class_name class_title">
                  <i className="fa-regular fa-comments" />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="main_class_name main_class_au">msg2324</div>
                <div className="main_class_name class_date">20XX.XX.XX</div>
                <div className="main_class_name class_view">12345</div>
                <div className="main_class_name class_reco">12</div>
              </div>
              <div className="writing_footer">
                <div className="writing_footer_box">
                  <div className="writing_button">
                    <Link href="writing.html">
                      <div className="writing_button_Text">
                        <i className="fa-regular fa-pen-to-square" />
                        글쓰기
                      </div>
                    </Link>
                  </div>
                  <div className="writing_search">
                    <div className="writing_search_box">
                      <div className="writing_search_input">
                        <input type="text" />
                      </div>
                      <div className="writing_search_text">검색</div>
                    </div>
                  </div>
                  <div className="page_selector">
                    <div className="page_selector_box">
                      <div className="community_pages">1</div>
                      <div className="community_pages">2</div>
                      <div className="community_pages">3</div>
                      <div className="community_pages">4</div>
                      <div className="community_pages">5</div>
                      <div className="community_pages">6</div>
                      <div className="community_pages">7</div>
                      <div className="community_pages">8</div>
                      <div className="community_pages">9</div>
                      <div className="community_pages">10</div>
                      <i className="community_pages fa-solid fa-chevron-right" />
                      <i className="community_pages fa-solid fa-angles-right" />
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
