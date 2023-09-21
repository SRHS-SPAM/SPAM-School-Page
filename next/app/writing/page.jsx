import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Link from "next/link";
import style from "./writing.module.css";

export default function Detail() {
  return (
    <div>
      {/* Header */}
      <header className="writing_header">
        <div className="writing_inner">
          <div className="writing_actions">
            <Arrow location={"/"}></Arrow>
            <div className="writing_menu">
              <div className="writing-menu-wrap">
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="writing_main">
        <div className="writing_base">
          <div className="writing_page">글 쓰기</div>
          <div className="writing_title">
            <select className="writing_select">
              <option value disabled selected hidden>
                &nbsp;게시판 선택
              </option>
              <option value="option1">공지사항</option>
              <option value="option2">자유게시판</option>
              <option value="option3">전공게시판</option>
              <option value="option4">학습게시판</option>
            </select>
          </div>
          <div className="writing_tag">
            <input
              className="writing_taginput"
              type="text"
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="writing_sub">
            <div className="writing_toolbar">
              <i className="fa-regular fa-image" />
              <i className="fa-solid fa-video" />
              <i className="fa-regular fa-face-smile" />
              <i className="fa-regular fa-file" />
              <i className="fa-solid fa-link" />
            </div>
            <div className="writing_text_setting">
              <select className="writing_fontselecter">
                <option value="option0">&nbsp;휴먼굴림체</option>
                <option value="option1">Arial</option>
                <option value="option2">굴림</option>
                <option value="option3">궁서</option>
                <option value="option4">나눔고딕</option>
              </select>
              <select className="writing_fontsizeselecter">
                <option value="option0">&nbsp;12</option>
                <option value="option1">13</option>
                <option value="option2">14</option>
                <option value="option3">15</option>
                <option value="option4">16</option>
              </select>
              <div className="writing_text_sub_setting">
                <i className="fa-solid fa-bold" />
                <i className="fa-solid fa-italic" />
                <i className="fa-solid fa-underline" />
                <i className="fa-solid fa-strikethrough" />
              </div>
            </div>
            <div className="writing_textarea_container">
              <textarea
                name="writing_text"
                className="writing_textarea"
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="post_save">
            <div className="post_savebutton">
              <button>저장</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
