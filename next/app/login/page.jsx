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
      <div>
        <div className={styles.main}>
          <div className={styles.stroke}>
            <div className={styles.box}>
              <h1 className={styles.school_name}>
                Seoul Robotics
                <br />
                <em>Highschool</em>
              </h1>
              <div className={styles.id_mainbox}>
                <LoginPage></LoginPage>
                <div className={styles.id_anotherbox}>
                  <div className={styles.anotherlogin}>
                    {another.map((name, i) => (
                      <AnotherLogin name={name} key={i}></AnotherLogin>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
