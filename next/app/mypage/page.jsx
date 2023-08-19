import Arrow from "@/components/Arrow";
import styles from "./mypage.module.css";
import Menubar from "@/components/Menubar";
import Gotosub from "@/components/Gotosub";
import { redirect } from 'next/navigation';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function mypage() {
  let session = await getServerSession(authOptions);
  let name, email, image;
  let targerPage = '/login';
  if(!session) {
    redirect(targerPage);
  }
  else {
    name = session.user.name;
    email = session.user.email;
    image= session.user.image;
  }
  return (
    <>
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
              <div className={styles.my_username}>{name}</div>
              <div className={styles.my_usermail}>{email}</div>
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
            <Gotosub location="calender" src="../../images/calendar-days-regular.svg" iconname="캘린더"/>
            <Gotosub location="cafeteria" src="../../images/bowl-food-solid.svg" iconname="급식"/>
            <Gotosub location="calender" src="../../images/headset-solid.svg" iconname="문의하기"/>
            <Gotosub location="calender" src="../../images/bullhorn-solid.svg" iconname="공지사항"/>
            <Gotosub location="calender" src="../../images/gear-solid.svg" iconname="설정"/>
            <Gotosub location="calender" src="../../images/../../images/pen-solid.svg" iconname="글 관리" clplus={styles.gotobox_write}/>
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
