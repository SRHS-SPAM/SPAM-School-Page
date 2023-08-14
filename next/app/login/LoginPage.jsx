"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import AnotherLogin from "./Anotherlogin";

export default function LoginPage() {
  const another = ["google", "facebook", "github", "apple"];
  const login = async (e) => {
    e.preventDefault();
    try {
      const id = e.target.id.value;
      const password = e.target.password.value;
      const response = await signIn("credentials", {
        id,
        password,
        redirect: true,
        callbackUrl: "http://localhost:3000/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const githubLogin = async (e) =>{
  //   e.preventDefault();
  //   try {
  //   } catch (error) {

  //   }
  // }
  return (
    <form method="POST" name="login" onSubmit={login}>
      <div className={styles.main}>
        <div className={styles.stroke}>
          <div className={styles.box}>
            <h1 className={styles.school_name}>
              Seoul Robotics
              <br />
              <em>Highschool</em>
            </h1>
            <div className={styles.id_mainbox}>
              <div className={styles.id_box}>
                <input id="id" type="text" placeholder="아이디" />
                <input id="password" type="password" placeholder="비밀번호" />
                <div className={styles.id_check}>
                  <input id={styles.idckb} type="checkbox" size="10" />
                  <span className={styles.idsave}>로그인 정보 저장하기</span>
                </div>
                <button type={"submit"} className={styles.login_button}>
                  로그인
                </button>
                <div className={styles.more}>
                  <div className={styles.lost}>비밀번호를 잊으셨나요?</div>
                  <div className={styles.signup}>회원가입</div>
                </div>
              </div>
              <div className={styles.id_anotherbox}>
                <div className={styles.anotherlogin}>
                  {another.map((name, i) => (
                    <AnotherLogin
                      name={name}
                      key={i}
                      onClick={() => {
                        signIn("name", {
                          redirect: true,
                          callbackUrl: "http://localhost:3000/",
                        });
                      }}
                    ></AnotherLogin>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
