import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import LoginPage from "./LoginPage";
import styles from "./login.module.css";
export default async function login() {
  return (
    <div>
      <Seo title="login" />
      <header className={styles.login_header}>
        <div className={styles.cafe_actions}>
          <Arrow location="/" mod={1} />
        </div>
      </header>
      <LoginPage></LoginPage>
    </div>
  );
}
