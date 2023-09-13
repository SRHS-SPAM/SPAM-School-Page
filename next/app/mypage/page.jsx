import Arrow from "@/components/Arrow";
import styles from "./mypage.module.css";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import GoToSub from "./GoToSub";
import SignOutButton from "./signOutButton";

import Pen from "../../public/svg/pen.svg";
import CalendarSvg from "../../public/svg/calendar.svg";
import Rice from "../../public/svg/Rice.svg";
import PenSolid from "../../public/svg/pen_solid.svg";
import Headset from "../../public/svg/headset.svg";
import Gear from "../../public/svg/gear.svg";

export default async function mypage() {
  let goToSub = [
    {
      iconName: "캘린더",
      src: <CalendarSvg></CalendarSvg>,
      location: "calender",
    },
    {
      iconName: "급식",
      src: <Rice></Rice>,
      location: "cafeteria",
    },
    {
      iconName: "문의하기",
      src: <PenSolid></PenSolid>,
      location: "calender",
    },
    {
      iconName: "공지사항",
      src: <Headset></Headset>,
      location: "calender",
    },
    {
      iconName: "설정",
      src: <Gear></Gear>,
      location: "calender",
    },
    {
      iconName: "글 관리",
      src: <CalendarSvg></CalendarSvg>,
      location: "calender",
      clplus: true,
    },
  ];
  const debug = true;
  let session = await getServerSession(authOptions);
  let name, email, image, grade, classNumber, number;
  let targerPage = "/login";

  if (!session) {
    redirect(targerPage);
  } else {
    name = session.user.name;
    email = session.user.email;
    image = session.user.image ? session.user.image : "/images/profile.png";
    grade = session.user.grade;
    classNumber = session.user.class;
    number = session.user.number;
  }

  return (
    <>
      <div className={styles.mypage_mainbox}>
        <div className={styles.my_topbox}>
          <div className={styles.my_arrowbox}>
            <Arrow location="/" mod={1} />
          </div>
          <div className={styles.my_maintxt}>마이페이지</div>
          <div className={styles.space}></div>
        </div>
        <div className={styles.my_prfilecover}>
          <div className={styles.my_profilebox}>
            <div className={styles.my_profileimg}>
              <img src={image} alt="프로필 사진" />
            </div>
            <div className={styles.my_userinfo}>
              <div className={styles.my_userinfo_top}>
                <div className={styles.my_userinfo_top1}>
                  <div className={styles.my_username}>{name}</div>
                  <div className={styles.my_usermail}>{email}</div>
                </div>
                <div className={styles.my_userinfo_top2}>
                  <div className={styles.my_userclass}>
                    {grade}학년 {classNumber}반 {number}번
                  </div>
                </div>
              </div>
              <div className={styles.my_userinfo_bottom}>
                <div className={styles.my_userintro}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum non orci bibendum, dictum libero quis, dapibus
                  massa. Suspendisse in ligula elit.
                </div>
              </div>
            </div>

            <div className={styles.my_rightbox}>
              <div className={styles.my_modify}>
                <Pen />
              </div>
              <div className={styles.my_goto_github}>
                <img src="/images/MyGithub.png" alt="깃허브" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.my_gotomenu}>
          <div className={styles.my_gotobox}>
            {goToSub.map((obj, i) => (
              <GoToSub
                key={i}
                location={obj.location}
                src={obj.src}
                iconName={obj.iconName}
                clplus={obj.clplus}
              />
            ))}

            {/* */}
          </div>
        </div>
        <div className={styles.my_casesubbox}>
          <div className={`${styles.writemanager} ${styles.my_footerbox}`}>
            글 관리
          </div>
          <SignOutButton></SignOutButton>
        </div>
      </div>
    </>
  );
}
