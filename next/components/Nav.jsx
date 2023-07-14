import Menubar from "@/components/Menubar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import styles from "./Nav.module.css";
import { format } from "date-fns";
import { getServerSession } from "next-auth";

export default async function Nav() {
  let session = await getServerSession(authOptions);
  const currentDate = new Date();
  const currentDateTimeString = format(currentDate, "yyyy.MM.dd (E)");
  return (
    <nav className={styles.inner}>
      <div className={styles.desktop_actions}>
        <div className={styles.primary_navigation}>
          <div className={styles.school_logo_header} id="/">
            <img src="../../images/logo.png" width="150px" />
          </div>
          <div className={styles.nav_left}>
            <Link href={"announcement"}>
              <div className={styles.nav_item}>
                <div className={styles.label}>공지사항</div>
              </div>
            </Link>
            <Link href={"cafeteria"}>
              <div className={styles.nav_item}>
                <div className={styles.label}>급식</div>
              </div>
            </Link>
            <Link href={"coummunity"}>
              <div className={styles.nav_item}>
                <div className={styles.label}>커뮤니티</div>
              </div>
            </Link>
            <Link href={"calendar"}>
              <div className={styles.nav_item}>
                <div className={styles.label}>캘린더</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.nav_right}>
        <div className={styles.aria_expanded}>
          <div className={styles.date}>{currentDateTimeString}</div>

          <div className={`${styles.nav_item} ${styles.login}`}>
            {session ? (
              <div className={styles.home_login_2}>
                {session.user.name}님 환영합니다.
              </div>
            ) : (
              <Link href={"/login"}>
                <div className={styles.label}>LOGIN</div>
              </Link>
            )}
          </div>
        </div>
        <Menubar></Menubar>
      </div>
    </nav>
  );
}
