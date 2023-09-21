import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
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
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ObjectId } from "mongodb";

export const metadata = {
  title: "writing",
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

  async function handleSubmit(formData) {
    "use server";

    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let session = await getServerSession(authOptions);

    let formattedDate = `${year}/${month}/${day};${hours}:${minutes}`;

    if (formData.get("title") == "") {
      return;
    } else if (formData.get("content") == "") {
      return;
    } else if (formData.get("category") == undefined) {
      console.log("시발 카테고리 설정하라고 ㅄ련아");
      return;
    }
    try {
      let db = (await connectDB).db("SRH-Community");
      const lastDocument = await db
        .collection("post")
        .findOne({}, { sort: { number: -1 } });

      let data = {
        title: formData.get("title"),
        content: formData.get("content"),
        good: 0,
        comment: 0,
        date: formattedDate,
        views: 0,
        writer: session.user.name,
        author: session.user.email,
        theme: 1,
        bad: 0,
        number: lastDocument ? lastDocument.number + 1 : 1,
        image: session.user.image,
        category: new ObjectId(formData.get("category")),
      };
      let result = await db.collection("post").insertOne(data);
      // redirect("/community/" + formData.get("category"));
    } catch (error) {
      console.error(error);
    }
  }
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
        <form action={handleSubmit} className={styles.writing_base}>
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
              required
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
                required
              />
            </div>
          </div>
          <div className={styles.post_save}>
            <div className={styles.post_savebutton}>
              <button type="submit">
                {/* onClick={() => redirect("/community/")} */}
                저장
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
