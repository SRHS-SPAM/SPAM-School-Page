import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import style from "./writing.module.css";

export default function Detail() {
  return (
    <>
      <div>
        <title>Writing</title>
        {/* Header */}
        <header className={style.writing_header}>
          <div className={style.writing_inner}>
            <div className={style.writing_actions}>
            <Arrow location="/community"></Arrow>
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
            <div className={style.writing_title}>
              <input
                className={style.writing_titleinput}
                type="text"
                placeholder="제목 작성"
              />
            </div>
            <div className={style.writing_tag}>
              <input
                className={style.writing_taginput}
                type="text"
                placeholder="태그"
              />
            </div>
            <div className={style.writing_par}>
              <textarea
                className={style.writing_partextarea}
                cols={30}
                rows={10}
                placeholder="글 쓰기"
                defaultValue={""}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
