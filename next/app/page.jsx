import Nav from "@/components/Nav";
import Seo from "@/components/Seo";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Seo title="Home" description="info" />
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
              <article className={styles.food}>
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
              </article>
              <article className={styles.caledar_article}>
                <div className={styles.calendar}>
                  <div className={styles.month_year}>March 2022</div>
                  <div className={styles.day}>
                    <div className={styles.row}>
                      <li>SUN</li>
                      <li className={styles.op}>28</li>
                      <li>5</li>
                      <li>12</li>
                      <li>19</li>
                      <li>26</li>
                    </div>
                    <div className={styles.row}>
                      <li>MON</li>
                      <li className={styles.op}>29</li>
                      <li>6</li>
                      <li>13</li>
                      <li>20</li>
                      <li>27</li>
                    </div>
                    <div className={styles.row}>
                      <li>TUE</li>
                      <li className={styles.op}>30</li>
                      <li>7</li>
                      <li>14</li>
                      <li>21</li>
                      <li>28</li>
                    </div>
                    <div className={styles.row}>
                      <li>WED</li>
                      <li>1</li>
                      <li>8</li>
                      <li>15</li>
                      <li>22</li>
                      <li>29</li>
                    </div>
                    <div className={styles.row}>
                      <li>THU</li>
                      <li>2</li>
                      <li>9</li>
                      <li>16</li>
                      <li>23</li>
                      <li>30</li>
                    </div>
                    <div className={styles.row}>
                      <li>FRI</li>
                      <li>3</li>
                      <li>10</li>
                      <li>17</li>
                      <li className={styles.today}>24</li>
                      <li>31</li>
                    </div>
                    <div className={styles.row}>
                      <li>SAT</li>
                      <li>4</li>
                      <li>11</li>
                      <li>18</li>
                      <li>25</li>
                      <li className={styles.op}>1</li>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      {/* footer */}
    </div>
  );
}
