import Arrow from "@/components/Arrow";
import styles from "./cafeteria.module.css";
import Menubar from "@/components/Menubar";

export const metadata = {
  title: "cafeteria",
};

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.cafe_header}>
        <div className={styles.cafe_inner}>
          <div className={styles.cafe_actions}>
            <Arrow location="/" mod={1} />

            <div className={styles.cafe_menu}>
              <div className={styles.cafe_menu_wrap}>
                <Menubar></Menubar>
              </div>
            </div>
          </div>
          <div className={styles.cafetitle_container}>
            <div className={styles.center_title}>
              <div className={styles.cafeteria_label}>급 식</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.cafe_container}>
          <div className={styles.cafe_box}>
            <div className={styles.cafe_date}>
              <span className={styles.cafe_date_label}>
                {" "}
                3월 28일 (화요일){" "}
              </span>
            </div>
            <article className={styles.cafe_menu_arti}>
              <div className={styles.menu_sections}>
                <div className={styles.cafe_food_menu}>
                  <div class={styles.cafe_food_info_container}>
                    <div className={styles.cafe_food_info}>
                      <div className={styles.cafe_status_time}>아침</div>
                      <div className={styles.cafe_kcal}>1,046kcal</div>
                    </div>
                  </div>
                  <div className={styles.cafe_menu_list}>
                    <li>수수밥</li>
                    <li>목살김치찌개</li>
                    <li>추러스고구마맛탕</li>
                    <li>가지무침</li>
                    <li>고추마요치킨(와사비)</li>
                    <li>오미자에이드</li>
                  </div>
                </div>

                <article>
                  <div className={styles.cafe_food_menu}>
                    <div class={styles.cafe_food_info_container}>
                      <div className={styles.cafe_food_info}>
                        <div className={styles.cafe_status_time}>
                          <em className={styles.current}>점심</em>
                        </div>
                        <div className={styles.cafe_kcal}>1,352kcal</div>
                      </div>
                    </div>
                    <div className={styles.cafe_menu_list}>
                      <li>수수밥</li>
                      <li>목살김치찌개</li>
                      <li>추러스고구마맛탕</li>
                      <li>가지무침</li>
                      <li>고추마요치킨(와사비)</li>
                      <li>오미자에이드</li>
                    </div>
                  </div>
                </article>

                <article>
                  <div className={styles.cafe_food_menu}>
                    <div class={styles.cafe_food_info_container}>
                      <div className={styles.cafe_food_info}>
                        <div className={styles.cafe_status_time}>저녁</div>
                        <div className={styles.cafe_kcal}>1,098kcal</div>
                      </div>
                    </div>
                    <div className={styles.cafe_menu_list}>
                      <li>수수밥</li>
                      <li>목살김치찌개</li>
                      <li>추러스고구마맛탕</li>
                      <li>가지무침</li>
                      <li>고추마요치킨(와사비)</li>
                      <li>오미자에이드</li>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
