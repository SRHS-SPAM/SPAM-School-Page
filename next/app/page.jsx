import Nav from "@/components/Nav";
import Link from "next/link";
import styles from "./page.module.css";
import MiniCalendar from "@/components/MiniCalendar";

export default function Home() {
  const currentDate = new Date();
  return (
    <>
      {/* header */}

      <Nav type="default" />
      {/* main */}
      <main>
        <section>
          <div className={styles.school_name_main}>
            <figure>
              <Link href={"/"}>
                <div className={styles.school_logo}>
                  <img src="images/logo.png" width="150px" />
                </div>
              </Link>
            </figure>
            <span className={styles.name_eng}> Seoul Robotics Highschool </span>
            <div className={styles.border}>
              <div className={styles.line} />
              <span className={styles.name_ko}>서울로봇고</span>
              <div className={styles.line} />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.main_info}>
            <div className={styles.mainbox}>
              <article className={styles.notice}>
                <div className={styles.notice_name}>주요 공지</div>
              </article>

              <Link href={"/cafeteria"} className={styles.food}>
                <div className={styles.food_title}>급식</div>
                <div className={styles.food_time_li}>
                  <div className={styles.launch}>
                    <section className={styles.food_title_section}>
                      <div className={styles.food_status}>
                        <span>점심</span>
                      </div>
                      <div className={styles.food_name}>급식</div>
                    </section>
                    <div className={styles.food_li}>
                      <ul className={styles.food_list}>
                        <li>수수밥</li>
                        <li>목살김치찌개</li>
                        <li>추러스고구마맛탕</li>
                        <li>가지무침</li>
                        <li>고추치킨마요(와사비)</li>
                        <li>오미자에이드</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.dinner}>
                    <section className={styles.food_title_section}>
                      <div className={styles.food_status}>
                        <span>저녁</span>
                      </div>
                      <div className={styles.food_name}>급식</div>
                    </section>

                    <div className={styles.food_li}>
                      <ul className={styles.food_list}>
                        <li>수수밥</li>
                        <li>목살김치찌개</li>
                        <li>추러스고구마맛탕</li>
                        <li>가지무침</li>
                        <li>고추치킨마요(와사비)</li>
                        <li>오미자에이드</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>

              <article className={styles.caledar_article}>
                <MiniCalendar
                  Year={currentDate.getFullYear()}
                  Month={currentDate.getMonth()}
                  Today={currentDate.getDate()}
                />
              </article>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
    </>
  );
}
