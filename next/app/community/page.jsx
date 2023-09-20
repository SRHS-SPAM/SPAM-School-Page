import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import styles from "./community.module.css";
import Sms from "../../public/svg/sms.svg";
import Thumbup from "../../public/svg/thumbUp.svg";
import RightArrow from "../../public/svg/rightArrow.svg";
import Search from "../../public/svg/search.svg";
import UpArrow from "./svg/upArrow.svg";
import DownArrow from "./svg/downArrow.svg";
import Minus from "../../public/svg/minus.svg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { format } from "date-fns";
import { connectDB } from "@/util/database";
import List from "./List";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export default async function Community() {
  let session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  let db = (await connectDB).db("SRH-Community");
  let articles = await db.collection("category").find().toArray();
  let data = await db
    .collection("post")
    .find()
    .sort({ good: -1 })
    .limit(10)
    .toArray();

  articles = articles.map((a) => {
    a.id = a._id.toString();
    a.title = a.title.toString();
    return a;
  });
  let topf = articles;
  topf.sort((a, b) => a.rank - b.rank);

  const currentDate = new Date();
  const currentDateTimeString = format(currentDate, "yyyy.MM.dd (E)");

  return (
    <>
      {/* header */}
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
                  <Link href={"community/" + articles[0].id}>
                    <div className={styles.community_article_topic}>
                      서로고 게시판
                    </div>
                  </Link>
                  <div className={styles.community_article_more}>
                    <Link href={"community/" + articles[0].id}>
                      <span className={styles.community_more}>더보기</span>
                    </Link>
                    <RightArrow></RightArrow>
                  </div>
                </div>
                <div className={styles.community_article_division} />
                <div className={styles.community_article_cotent}>
                  <div className={styles.community_article_detail}>
                    {data.map((arg, i) => (
                      <div
                        key={i}
                        className={styles.community_article_detail_list}
                      >
                        <div className={styles.community_article_detail_left}>
                          <div className={styles.community_article_major}>
                            <Link href={"community/" + arg.category}>
                              {articles
                                .filter((obj) => obj.id == arg.category)
                                .map((obj) => obj.title)}
                            </Link>
                          </div>
                          <div className={styles.community_article_title}>
                            <Link
                              href={
                                "community/6508fbdca79261ba213f5594/" + arg._id
                              }
                            >
                              {arg.title}
                            </Link>
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
                              {arg.comment.toLocaleString()}
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
                {topf.map(async (ai, i) => {
                  if (i > 0)
                    return (
                      <div className={styles.community_sub_article} key={i}>
                        <div className={styles.community_sub_article_theme}>
                          <Link href={"community/" + ai.id}>
                            <div className={styles.community_sub_article_topic}>
                              {ai.title} 게시판
                            </div>
                          </Link>
                          <div className={styles.community_article_more}>
                            <Link href={"community/" + ai.id}>
                              <span className={styles.community_sub_more}>
                                더보기
                              </span>
                            </Link>
                            <RightArrow></RightArrow>
                          </div>
                        </div>
                        <div
                          className={styles.community_sub_article_division}
                        />
                        <List result={ai.id}></List>
                      </div>
                    );
                })}
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
                      <div
                        className={styles.community_ranking_detail_listitem}
                        key={i}
                      >
                        <div className={styles.community_ranking_detail_left}>
                          <div className={styles.community_ranking_num}>
                            {ai.rank}.
                          </div>
                          <div className={styles.community_ranking_title}>
                            {ai.title}
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
                              <Minus></Minus>
                            ) : ai.drank > 0 ? (
                              <UpArrow></UpArrow>
                            ) : (
                              <DownArrow></DownArrow>
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
