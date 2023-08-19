import Arrow from "@/components/Arrow";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import styles from "./signup.module.css";

export default async function SignupItem() {
  let session = await getServerSession(authOptions);
  let email = session.user.email;
  return (
    <>
      {/* header */}

      <header className={styles.login_header}>
        <div className={styles.cafe_actions}>
          <Arrow location="/login" />
        </div>
      </header>

      {/* main */}

      <form method="POST" name="login" action="/api/auth/signup">
        <div className={styles.signup_main}>
          <div className={styles.signup_stroke}>
            <div className={styles.signup_box}>
              <h1 className={styles.sign_school_name}>
                Seoul Robotics
                <br />
                <em>Highschool</em>
              </h1>
              <div className={styles.signup_mainbox}>
                <div className={styles.signup_id_box}>
                  {email && (
                    <input
                      name="email"
                      type="text"
                      placeholder="이메일"
                      autoComplete="off"
                      value={email}
                      readOnly
                      className={styles.disable_input}
                    />
                  )}
                  {!email && (
                    <input
                      name="email"
                      type="text"
                      placeholder="이메일"
                      autoComplete="off"
                    />
                  )}

                  <input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    autoComplete="off"
                  />
                  <input
                    name="tel"
                    type="text"
                    placeholder="전화번호"
                    autoComplete="off"
                  />
                  <input
                    name="name"
                    type="text"
                    placeholder="성명"
                    autoComplete="off"
                  />
                  <nav className={styles.sign_schoolnum}>
                    <input
                      name="grade"
                      type="text"
                      placeholder="학년"
                      autoComplete="off"
                    />
                    <input
                      name="class"
                      type="text"
                      placeholder="반"
                      autoComplete="off"
                    />
                    <input
                      name="number"
                      type="text"
                      placeholder="번호"
                      autoComplete="off"
                    />
                  </nav>
                  <button type="submit" className={styles.login_button}>
                    가입
                  </button>
                  <div className={styles.more}>
                    <div className={styles.lost}>계정이 있으신가요?</div>
                    <div className={styles.signup}>
                      <Link href="/login">로그인</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
