import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import style from "./writing.module.css";
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

export default async function Detail() {
  let db = (await connectDB).db("SRH-Community");
  let articles = await db.collection("category").find().toArray();
  articles = articles.map((a) => {
    a._id = a._id.toString();
    a.title = a.title.toString();
    return a;
  });
  let font = [
    "휴먼굴림체",
    "Arial",
    "굴림",
    "궁서",
    "나눔고딕",
  ];
  let fontsize = [
    12,
    13,
    14,
    15,
    16,
    17,
    18
  ]
  return (
    <div>
      {/* Header */}
      <header className={style.writing_header}>
        <div className={style.writing_inner}>
          <div className={style.writing_actions}>
            <Arrow location={"/"}></Arrow>
            <div className={style.writing_menu}>
              <div className={style.writing_menu_wrap}>
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className={style.writing_main}>
        <div className={style.writing_base}>
          <div className={style.writing_page}>글 쓰기</div>
          <div className={style.writing_title}>
            <select className={style.writing_select}>
              <option value disabled selected hidden>
                &nbsp;게시판 선택
              </option>
              {articles.map((ai, i) => {
                if (i >= 1)
                  return (
                    <option value={"option" + i} key={i}>
                      {ai.title}
                    </option>
                  );
              })}
            </select>
          </div>
          <div className={style.writing_tag}>
            <input
              className={style.writing_taginput}
              type="text"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className={style.writing_sub}>
            <div className={style.writing_toolbar}>
              <Image></Image>
              <Video></Video>
              <Smile></Smile>
              <File></File>
              <LinkSvg></LinkSvg>
            </div>
            <div className={style.writing_text_setting}>
              <select className={style.writing_fontselecter}>
                {font.map((ai, i) => {
                  return (
                    <option value={"option" + i} key={i}>
                      {ai}
                    </option>
                  );
                })}
              </select>
              <select className={style.writing_fontsizeselecter}>
                {fontsize.map((ai, i) => {
                  return (
                    <option value={"option" + i} key={i}>
                      {ai}
                    </option>
                  );
                })}
              </select>
              <div className={style.writing_text_sub_setting}>
                <Bold></Bold>
                <Italic></Italic>
                <Underline></Underline>
                <StrikeThrough></StrikeThrough>
              </div>
            </div>
            <div className={style.writing_textarea_container}>
              <textarea
                name="writing_text"
                className={style.writing_textarea}
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
          </div>
          <div className={style.post_save}>
            <div className={style.post_savebutton}>
              <button>저장</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
