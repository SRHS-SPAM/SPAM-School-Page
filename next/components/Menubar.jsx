"use client";
import { useState } from "react";
import styles from "./Menubar.module.css";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Menubar() {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen((prop) => !prop);

  return (
    <div>
      <div className={styles.bars} id="bar" onClick={onClick}>
        <div className={styles.menuline_horizontal}></div>
        <div className={styles.menuline_horizontal}></div>
        <div className={styles.menuline_horizontal}></div>
      </div>
      <div
        className={styles.menubar}
        id="menubar_f"
        style={open ? { display: "flex" } : { display: "none" }}
      >
        <div className={styles.menu_top}>
          <div className={styles.menubar_line}>
            <div className={styles.menubar_menuline} onClick={onClick}>
              <div className={styles.menubar_menuline1} />
              <div className={styles.menubar_menuline2} />
              <div className={styles.menubar_menuline3} />
            </div>
          </div>
        </div>
        <div className={styles.menu_bottom}>
          <div className={styles.menu_bottom_left}>
            <Link href={"announcement"}>
              <div className={styles.menu_column}>공지사항</div>
            </Link>
            <Link href={"cafeteria"}>
              <div className={styles.menu_column}>급식</div>
            </Link>
            <Link href={"coummunity"}>
              <div className={styles.menu_column}>커뮤니티</div>
            </Link>
            <Link href={"calendar"}>
              <div className={styles.menu_column}>캘린더</div>
            </Link>
          </div>
          <div className={styles.menu_bottom_right}>
            <Link href={"mypage"}>
              <div className={styles.menu_column}>마이페이지</div>
            </Link>
            <Link href={"setting"}>
              <div className={styles.menu_column}>설정</div>
            </Link>
            <Link href={"contactus"}>
              <div className={styles.menu_column}>문의하기</div>
            </Link>
            <Link href={"/"}>
              <div
                className={styles.menu_column}
                onClick={() => {
                  signOut();
                }}
              >
                로그아웃
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
