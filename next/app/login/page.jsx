import Arrow from "@/components/Arrow";
import LoginPage from "./LoginPage";
import styles from "./login.module.css";

export const metadata = {
  title: "login",
};

export default async function login() {
  return (
    <div>
      <header className={styles.login_header}>
        <div className={styles.cafe_actions}>
          <Arrow location="/" mod={1} />
        </div>
      </header>
      <LoginPage></LoginPage>
    </div>
  );
}
