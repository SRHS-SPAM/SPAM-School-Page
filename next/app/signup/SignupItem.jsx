"use client";
import Arrow from "@/components/Arrow";
import Link from "next/link";
import { useState } from "react";
import styles from "./signup.module.css";

export default function SignupItem({ nameValue }) {
  const [email, setEmail] = useState("");

  const onClick = async () => {
    const response = await fetch("/backend/auth/verify", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const check = e.target.check.value;
      const password = e.target.password.value;
      const passwordCheck = e.target.passwordCheck.value;
      const name = e.target.name.value;
      const grade = e.target.grade.value;
      const className = e.target.className.value;
      const number = e.target.number.value;

      if (password !== passwordCheck) {
        alert("비번 틀림");
      } else if (
        isNaN(check) ||
        isNaN(grade) ||
        isNaN(className) ||
        isNaN(number)
      ) {
        alert("숫자가 아님");
      }

      const body = {
        email: email,
        verify_code: parseInt(check),
        password: password,
        name: name,
        grade: parseInt(grade),
        class: parseInt(className),
        number: parseInt(number),
      };

      console.log(body);

      const response = await fetch("/backend/auth/signup", {
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((r) => r.json())
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* header */}

      <header className={styles.login_header}>
        <div className={styles.cafe_actions}>
          <Arrow location="/login" mod={1} />
        </div>
      </header>

      {/* main */}

      <form onSubmit={onSubmit}>
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
                  <div className={styles.email_box}>
                    <input
                      required
                      name="email"
                      type="text"
                      placeholder="학교 이메일"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <div onClick={onClick}>인증</div>
                  </div>
                  <input
                    required
                    name="check"
                    type="text"
                    placeholder="인증번호"
                    autoComplete="off"
                  />
                  <input
                    required
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    autoComplete="off"
                  />
                  <input
                    required
                    name="passwordCheck"
                    type="password"
                    placeholder="비밀번호 확인"
                    autoComplete="off"
                  />

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="성명"
                    autoComplete="off"
                  />
                  <nav className={styles.sign_schoolnum}>
                    <input
                      required
                      name="grade"
                      type="text"
                      placeholder="학년"
                      autoComplete="off"
                    />
                    <input
                      required
                      name="className"
                      type="text"
                      placeholder="반"
                      autoComplete="off"
                    />
                    <input
                      required
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
