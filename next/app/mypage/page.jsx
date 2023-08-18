import Arrow from "@/components/Arrow";
import styles from "./mypage.module.css";
import Menubar from "@/components/Menubar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function mypage() {
  let session = await getServerSession(authOptions);
  return (
    <>
      {/*{!session && (
        <>
          Not signed in <br />
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          Name: {session.user.name} <br />
          Name: {session.user.image} <br />
        </>
      )}*/}
      <div className={styles.mypage_mainbox}>
        <div className={styles.my_topbox}>
          <div className={styles.my_arrowbox}>
            <Arrow location="/" />
          </div>
          <div className={styles.my_maintxt}>마이페이지</div>
          <Menubar></Menubar>
        </div>
        <div className={styles.my_prfilecover}>
          <div className={styles.my_profilebox}>
            <div className={styles.my_profileimg}>
              <img src="../../images/test.webp" alt="프로필 사진" />
            </div>
            <div className={styles.my_userinfo}>
              <div className={styles.my_username}>김스팸</div>
              <div className={styles.my_usermail}>kimspam@gamil.com</div>
            </div>
            <div className={styles.my_rightbox}>
              <div className={styles.my_modify}>
                <img src="../../images/pen-to-square-solid.svg" alt="수정" />
              </div>
              <div className={styles.my_goto_github}>
                <img src="../../images/MyGithub.png" alt="깃허브" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.my_gotomenu}>
          <div className={styles.my_gotobox}>
            <div className={styles.gotobox_subbox}>
              <div className={styles.gotobox_icon}>
                <img src="../../images/calendar-days-regular.svg" alt="달력" />
              </div>
              <div className={styles.gotobox_iconname}>캘린더</div>
            </div>
            <div className={styles.gotobox_subbox}>
              <div className={styles.gotobox_icon}>
                <img src="../../images/bowl-food-solid.svg" alt="급식" />
              </div>
              <div className={styles.gotobox_iconname}>급식</div>
            </div>
            <div className={styles.gotobox_subbox}>
              <div className={styles.gotobox_icon}>
                <img src="../../images/headset-solid.svg" alt="문의하기" />
              </div>
              <div className={styles.gotobox_iconname}>문의하기</div>
            </div>
            <div className={styles.gotobox_subbox}>
              <div className={styles.gotobox_icon}>
                <img src="../../images/bullhorn-solid.svg" alt="공지사항" />
              </div>
              <div className={styles.gotobox_iconname}>공지사항</div>
            </div>
            <div className={styles.gotobox_subbox}>
              <div className={styles.gotobox_icon}>
                <img src="../../images/gear-solid.svg" alt="설정" />
              </div>
              <div className={styles.gotobox_iconname}>설정</div>
            </div>
            <div className={`${styles.gotobox_subbox} ${styles.gotobox_write}`}>
              <div className={styles.gotobox_icon_write}>
                <img src="../../images/pen-solid.svg" alt="글 관리" />
              </div>
              <div className={styles.gotobox_iconname}>글 관리</div>
            </div>
          </div>
        </div>
        <div className={styles.my_casesubbox}>
          <div className={`${styles.writemanager} ${styles.my_footerbox}`}>
            글 관리
          </div>
          <div className={`${styles.my_logout} ${styles.my_footerbox}`}>
            로그아웃
          </div>
        </div>
      </div>
    </>
  );
}
