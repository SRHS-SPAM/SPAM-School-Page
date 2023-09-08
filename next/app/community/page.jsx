import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import styles from "./community.module.css";
import Sms from "../../public/svg/sms.svg";
import Thumbup from "../../public/svg/thumbUp.svg";
import RightArrow from "../../public/svg/rightArrow.svg";
import Search from "../../public/svg/search.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { format } from "date-fns";

export default async function Community() {
  let info = [
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "자유",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "학습",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "자유",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
    {
      tag: "전공",
      title: "Lorem ipsum dolor sit amet",
      good: 23,
      comments: 24,
    },
  ];
  let articles = ["자유", "전공", "학습", "시스템", "설계", "제어"];
  let contents = [
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
    { title: "Lorem ipsum dolor sit", views: 5293 },
  ];
  let topf = [
    { category: "서로고 베스트", drank: 1 },
    { category: "전공", drank: -1 },
    { category: "자유", drank: 0 },
    { category: "시스템", drank: 2 },
    { category: "학습", drank: -1 },
  ];

  let session = await getServerSession(authOptions);
  const currentDate = new Date();
  const currentDateTimeString = format(currentDate, "yyyy.MM.dd (E)");

  return (
    <>
      {/* header */}
      <link rel="stylesheet" href="./community.module.css" />
      <header>
        <nav className={styles.community_inner}>
          <div className={styles.community_nav_left}>
            <Arrow location={"/"} mod={2}></Arrow>
            <div className={styles.community_title_box}>
              <div className={styles.community_title}>커뮤니티</div>
            </div>
          </div>
          <div className={styles.community_nav_right}>
            <div className={styles.community_aria_expanded}>
              <div className={styles.community_date}>
                {currentDateTimeString}
              </div>
              {session ? (
                <Link href={"mypage"}>
                  <div className={styles.community_nav_item}>
                    안녕하세요 {session.user.name}님
                  </div>
                </Link>
              ) : (
                <Link href={"login"}>
                  <div
                    className={`${styles.community_nav_item} ${styles.login}`}
                  >
                    <div className={styles.community_label}>Login</div>
                  </div>
                </Link>
              )}
            </div>
            <div className={styles.menu_wrap}>
              <Menubar></Menubar>
            </div>
          </div>
        </nav>
      </header>
      {/* main */}
      <div className={styles.community_main}>
        <div className={styles.community_home}>
          <div className={styles.community_left_section}>
            <div className={styles.community_left_section_main}>
              <div className={styles.community_search_bar}>
                <Search
                  className={styles.search}
                  height="35px"
                  width="35px"
                ></Search>
                <input
                  className={styles.community_search_bar_input}
                  type="text"
                  placeholder="관심있는 내용을 검색해보세요!"
                />
              </div>
              {/* sub article */}
              <div className={styles.community_article}>
                <div className={styles.community_article_theme}>
                  <Link href={"coummunity_detail"}>
                    <div className={styles.community_article_topic}>
                      서로고 베스트
                    </div>
                  </Link>
                  <div className={styles.community_article_more}>
                    <Link href={"community/1"}>
                      <span className={styles.community_more}>더보기</span>
                    </Link>
                    <RightArrow></RightArrow>
                  </div>
                </div>
                <div className={styles.community_article_division} />
                <div className={styles.community_article_cotent}>
                  <div className={styles.community_article_detail}>
                    {info.map((arg, i) => (
                      <div
                        key={i}
                        className={styles.community_article_detail_list}
                      >
                        <div className={styles.community_article_detail_left}>
                          <div className={styles.community_article_major}>
                            {arg.tag}
                          </div>
                          <div className={styles.community_article_title}>
                            {arg.title}
                          </div>
                        </div>
                        <div className={styles.community_article_detail_right}>
                          <div className={styles.community_article_like}>
                            <Thumbup></Thumbup>
                            <span
                              className={styles.community_article_like_value}
                            >
                              {arg.good.toLocaleString()}
                            </span>
                          </div>
                          <div className={styles.community_article_comment}>
                            <Sms></Sms>
                            <span
                              className={styles.community_article_comment_value}
                            >
                              {arg.comments.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.community_sub_article_main}>
              <div className={styles.community_sub_article_list}>
                {articles.map((ai, i) => (
                  <div className={styles.community_sub_article}>
                    <div className={styles.community_sub_article_theme}>
                      <div className={styles.community_sub_article_topic}>
                        {ai} 게시판
                      </div>
                      <div className={styles.community_article_more}>
                        <span className={styles.community_sub_more}>
                          더보기
                        </span>
                        <img src="svg/rightArrow.svg" alt="￿" />
                      </div>
                    </div>
                    <div className={styles.community_sub_article_division} />
                    {contents.map((ai, i) => (
                      <div className={styles.community_sub_article_content}>
                        <div className={styles.community_sub_article_detail}>
                          <div
                            className={styles.community_sub_article_detail_left}
                          >
                            <div className={styles.community_sub_article_title}>
                              {ai.title}
                            </div>
                          </div>
                          <div
                            className={
                              styles.community_sub_article_detail_right
                            }
                          >
                            <div className={styles.community_sub_article_views}>
                              <img src="svg/eye.svg" alt="￿" />
                              <span
                                className={
                                  styles.community_sub_article_views_value
                                }
                              >
                                {ai.views.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.community_right_section}>
            <div className={styles.community_right_section_main}>
              <div className={styles.community_ranking}>
                <div className={styles.community_ranking_box}>
                  <div className={styles.community_ranking_theme}>
                    <div className={styles.community_ranking_topic}>순위</div>
                  </div>
                  <div className={styles.community_ranking_division} />
                  <div className={styles.community_ranking_detail_list}>
                    {topf.map((ai, i) => (
                      <div className={styles.community_ranking_detail_listitem}>
                        <div className={styles.community_ranking_detail_left}>
                          <div className={styles.community_ranking_num}>
                            {i + 1}.
                          </div>
                          <div className={styles.community_ranking_title}>
                            {ai.category}
                          </div>
                        </div>
                        <div className={styles.community_ranking_detail_right}>
                          <div className={styles.community_ranking_status}>
                            <span
                              className={styles.community_ranking_like_value}
                            >
                              {Math.abs(ai.drank)}
                            </span>
                          </div>
                          <div className={styles.community_ranking_now}>
                            {ai.drank == 0 ? (
                              <img src="svg/minus.svg" alt="￿" />
                            ) : ai.drank > 0 ? (
                              <img src="svg/upArrow.svg" alt="￿" />
                            ) : (
                              <img src="svg/downArrow.svg" alt="￿" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
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
