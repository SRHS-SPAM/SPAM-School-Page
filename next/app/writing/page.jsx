import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import styles from "./writing.module.css";
import Image from "@/public/svg/image.svg";
import Video from "@/public/svg/Videocam.svg";
import Smile from "@/public/svg/smile.svg";
import File from "@/public/svg/Note.svg";
import LinkSvg from "@/public/svg/Link.svg";

import Bold from "@/public/svg/Bold.svg";
import Italic from "@/public/svg/Italic.svg";
import Underline from "@/public/svg/Underline.svg";
import StrikeThrough from "@/public/svg/Strikethrough.svg";
import { connectDB } from "@/util/database";

export const metadata = {
  title: "signup",
};

export default async function Detail() {
  let db = (await connectDB).db("SRH-Community");
  let articles = await db.collection("category").find().toArray();
  articles = articles.map((a) => {
    a._id = a._id.toString();
    a.title = a.title.toString();
    return a;
  });
  let font = ["휴먼굴림체", "Arial", "굴림", "궁서", "나눔고딕"];
  let fontsize = [12, 13, 14, 15, 16, 17, 18];

  return (
    <div>
      {/* Header */}
      <header className={styles.writing_header}>
        <div className={styles.writing_inner}>
          <div className={styles.writing_actions}>
            <Arrow location={"/"} mod={1}></Arrow>
            <div className={styles.writing_menu}>
              <div className={styles.writing_menu_wrap}>
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className={styles.writing_main}>
        <form
          action="/api/community/new"
          method="POST"
          className={styles.writing_base}
        >
          <div className={styles.writing_page}>글 쓰기</div>
          <div className={styles.writing_title}>
            <select
              name="category"
              id="category"
              className={styles.writing_select}
              defaultValue="1"
            >
              <option value="1" disabled hidden>
                &nbsp;게시판 선택
              </option>
              {articles.map((ai, i) => {
                if (i >= 1)
                  return (
                    <option value={ai._id} key={i}>
                      &nbsp;{ai.title}
                    </option>
                  );
              })}
            </select>
          </div>
          <div className={styles.writing_tag}>
            <input
              className={styles.writing_taginput}
              type="text"
              name="title"
              id="title"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className={styles.writing_sub}>
            <div className={styles.writing_toolbar}>
              <Image></Image>
              <Video></Video>
              <Smile></Smile>
              <File></File>
              <LinkSvg></LinkSvg>
            </div>
            <div className={styles.writing_text_setting}>
              <select className={styles.writing_fontselecter}>
                {font.map((ai, i) => {
                  return (
                    <option value={"option" + i} key={i}>
                      {ai}
                    </option>
                  );
                })}
              </select>
              <select className={styles.writing_fontsizeselecter}>
                {fontsize.map((ai, i) => {
                  return (
                    <option value={"option" + i} key={i}>
                      {ai}
                    </option>
                  );
                })}
              </select>
              <div className={styles.writing_text_sub_setting}>
                <Bold></Bold>
                <Italic></Italic>
                <Underline></Underline>
                <StrikeThrough></StrikeThrough>
              </div>
            </div>
            <div className={styles.writing_textarea_container}>
              <textarea
                name="content"
                id="content"
                className={styles.writing_textarea}
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
          </div>
          <div className={styles.post_save}>
            <div className={styles.post_savebutton}>
              <button type="submit">저장</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
