import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import LoginPage from "./LoginPage";
import styles from "./login.module.css";
export default async function login() {
  return (
    <>
      <Seo title="login" />
      <header class={styles.login_header}>
        <div class={styles.cafe_actions}>
          <Arrow location="/" />
        </div>
      </header>
      <LoginPage></LoginPage>
    </>
  );
}
