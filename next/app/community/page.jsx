import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import styles from "./community.module.css";

export default function Community() {
  let info = [
    { tag: "전공", title: "Lorem ipsum dolor sit amet", good: 23, bad: 24 },
  ];
  return (
    <>
      {/* header */}
      <link rel="stylesheet" href="./community.module.css" />
      <header>
        <nav className="community_inner">
          <div className="community_nav_left">
            <Arrow location={""}></Arrow>
            <div className="community_title_box">
              <div className="community_title">커뮤니티</div>
            </div>
          </div>
          <div className="community_nav_right">
            <div className="community_aria_expanded">
              <div className="community_date">20XX.XX.XX(X)</div>
              <Link href={"login"}>
                <div className="community_nav_item login">
                  <div className="community_label">안녕하세요 OOO님</div>
                </div>
              </Link>
            </div>
            <div className="menu_wrap">
              <Menubar></Menubar>
            </div>
          </div>
        </nav>
      </header>
      {/* main */}
      <div className="community_main">
        <div className="community_home">
          <div className="community_left_section">
            <div className="community_left_section_main">
              <div className="community_search_bar">
                <img src="/svg/search.svg" alt="" />
                <input
                  className="community_search_bar_input"
                  type="text"
                  placeholder="관심있는 내용을 검색해보세요!"
                />
              </div>
              {/* sub article */}
              <div className="community_article">
                <div className="community_article_theme">
                  <Link href={"coummunity_detail"}>
                    <div className="community_article_topic">서로고 베스트</div>
                  </Link>
                  <div className="community_article_more">
                    <Link href={"coummunity_detail"}>
                      <span className="community_more">더보기</span>
                    </Link>
                    <img src="/svg/rightArrow.svg" alt="" />
                  </div>
                </div>
                <div className="community_article_division" />
                <div className="community_article_cotent">
                  <div className="community_article_detail">
                    {/* List 1 */}
                    {}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <img src="svg/thumbUp.svg" alt="￿" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <img src="svg/sms.svg" alt="￿" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 2 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">자유</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 3 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 4 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 5 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 6 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 7 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 8 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 9 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* List 10 */}
                    <div className="community_article_detail_list">
                      <div className="community_article_detail_left">
                        <div className="community_article_major">전공</div>
                        <div className="community_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_article_detail_right">
                        <div className="community_article_like">
                          <i className="fa-regular fa-thumbs-up" />
                          <span className="community_article_like_value">
                            24
                          </span>
                        </div>
                        <div className="community_article_comment">
                          <i className="fa-regular fa-message" />
                          <span className="community_article_comment_value">
                            23
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="community_sub_article_main">
              <div className="community_sub_article_list">
                {/* sub article 1 */}
                <div className="community_sub_article">
                  <div className="community_sub_article_theme">
                    <div className="community_sub_article_topic">
                      자유 게시판
                    </div>
                    <div className="community_sub_article_more">
                      <span className="community_sub_more">더보기</span>
                      <img src="svg/rightArrow.svg" alt="￿" />
                    </div>
                  </div>
                  <div className="community_sub_article_division" />
                  <div className="community_sub_article_content">
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <img src="svg/eye.svg" alt="￿" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sub article 2 */}
                <div className="community_sub_article">
                  <div className="community_sub_article_theme">
                    <div className="community_sub_article_topic">
                      전공 게시판
                    </div>
                    <div className="community_sub_article_more">
                      <span className="community_sub_more">더보기</span>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="community_sub_article_division" />
                  <div className="community_sub_article_content">
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sub article 3 */}
                <div className="community_sub_article">
                  <div className="community_sub_article_theme">
                    <div className="community_sub_article_topic">
                      학습 게시판
                    </div>
                    <div className="community_sub_article_more">
                      <span className="community_sub_more">더보기</span>
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                  </div>
                  <div className="community_sub_article_division" />
                  <div className="community_sub_article_content">
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sub article 2 */}
                <div className="community_sub_article">
                  <div className="community_sub_article_theme">
                    <div className="community_sub_article_topic">
                      자유 게시판
                    </div>
                    <div className="community_sub_article_more">
                      <span className="community_sub_more">더보기</span>
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                  </div>
                  <div className="community_sub_article_division" />
                  <div className="community_sub_article_content">
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="community_sub_article">
                  <div className="community_sub_article_theme">
                    <div className="community_sub_article_topic">
                      자유 게시판
                    </div>
                    <div className="community_sub_article_more">
                      <span className="community_sub_more">더보기</span>
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                  </div>
                  <div className="community_sub_article_division" />
                  <div className="community_sub_article_content">
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="community_sub_article">
                  <div className="community_sub_article_theme">
                    <div className="community_sub_article_topic">
                      자유 게시판
                    </div>
                    <div className="community_sub_article_more">
                      <span className="community_sub_more">더보기</span>
                      <i className="fa-solid fa-chevron-right" />
                    </div>
                  </div>
                  <div className="community_sub_article_division" />
                  <div className="community_sub_article_content">
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="community_sub_article_detail">
                      <div className="community_sub_article_detail_left">
                        <div className="community_sub_article_title">
                          Lorem ipsum dolor sit amet
                        </div>
                      </div>
                      <div className="community_sub_article_detail_right">
                        <div className="community_sub_article_views">
                          <i className="fa-regular fa-eye" />
                          <span className="community_sub_article_views_value">
                            5,293
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="community_right_section">
            <div className="community_right_section_main">
              <div className="community_ranking">
                <div className="community_ranking_box">
                  <div className="community_ranking_theme">
                    <div className="community_ranking_topic">순위</div>
                  </div>
                  <div className="community_ranking_division" />
                  <div className="community_ranking_detail_list">
                    {/*Ranking List 1*/}
                    <div className="community_ranking_detail_listitem">
                      <div className="community_ranking_detail_left">
                        <div className="community_ranking_num">1.</div>
                        <div className="community_ranking_title">
                          서로고 베스트
                        </div>
                      </div>
                      <div className="community_ranking_detail_right">
                        <div className="community_ranking_status">
                          <span className="community_ranking_like_value">
                            1
                          </span>
                        </div>
                        <div className="community_ranking_now">
                          <img src="svg/upArrow.svg" alt="￿" />
                        </div>
                      </div>
                    </div>
                    {/*Ranking List 2*/}
                    <div className="community_ranking_detail_listitem">
                      <div className="community_ranking_detail_left">
                        <div className="community_ranking_num">2.</div>
                        <div className="community_ranking_title">전공</div>
                      </div>
                      <div className="community_ranking_detail_right">
                        <div className="community_ranking_status">
                          <span className="community_ranking_like_value">
                            1
                          </span>
                        </div>
                        <div className="community_ranking_now">
                          <img src="svg/downArrow.svg" alt="￿" />
                        </div>
                      </div>
                    </div>
                    {/*Ranking List 3*/}
                    <div className="community_ranking_detail_listitem">
                      <div className="community_ranking_detail_left">
                        <div className="community_ranking_num">3.</div>
                        <div className="community_ranking_title">자유</div>
                      </div>
                      <div className="community_ranking_detail_right">
                        <div className="community_ranking_status">
                          <span className="community_ranking_like_value" />
                        </div>
                        <div className="community_ranking_now">
                          <img src="svg/minus.svg" alt="￿" />
                        </div>
                      </div>
                    </div>
                    {/*Ranking List 4*/}
                    <div className="community_ranking_detail_listitem">
                      <div className="community_ranking_detail_left">
                        <div className="community_ranking_num">4.</div>
                        <div className="community_ranking_title">시스템</div>
                      </div>
                      <div className="community_ranking_detail_right">
                        <div className="community_ranking_status">
                          <span className="community_ranking_like_value">
                            2
                          </span>
                        </div>
                        <div className="community_ranking_now">
                          <img src="svg/upArrow.svg" alt="￿" />
                        </div>
                      </div>
                    </div>
                    {/*Ranking List 5*/}
                    <div className="community_ranking_detail_listitem">
                      <div className="community_ranking_detail_left">
                        <div className="community_ranking_num">5.</div>
                        <div className="community_ranking_title">학습</div>
                      </div>
                      <div className="community_ranking_detail_right">
                        <div className="community_ranking_status">
                          <span className="community_ranking_like_value">
                            1
                          </span>
                        </div>
                        <div className="community_ranking_now">
                          <img src="svg/downArrow.svg" alt="￿" />
                        </div>
                      </div>
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
