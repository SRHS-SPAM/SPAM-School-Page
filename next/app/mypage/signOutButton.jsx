"use client";

import { signOut } from "next-auth/react";
import styles from "./mypage.module.css";

export default function SignOutButton() {
  return (
    <>
      <div
        className={`${styles.my_logout} ${styles.my_footerbox}`}
        onClick={() => {
          signOut();
        }}
      >
        로그아웃
      </div>
    </>
  );
}
