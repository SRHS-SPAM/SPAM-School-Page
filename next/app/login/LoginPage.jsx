"use client";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";
import AnotherLogin from "./Anotherlogin";
import Link from "next/link";

export default function LoginPage() {
  const another = ["google", "facebook", "github", "apple"];

  const login = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "http://localhost:3000/",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.id_box} method="POST" name="login" onSubmit={login}>
      <input id="email" type="text" placeholder="이메일" />
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
        <Link href="/signup">
          <div className={styles.signup}>회원가입</div>
        </Link>
      </div>
    </form>
  );
}
