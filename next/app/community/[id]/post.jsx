"use client";

import style from "./community_detail.module.css";
import Sms from "../../../public/svg/sms.svg";
import Link from "next/link";

export default function Post({ post, name }) {
  return (
    <>
      {post.map((ai, i) => {
        let [datePart, timePart] = ai.date.split(";");
        return (
          <div className={style.writing_main_class} key={i}>
            <div className={`${style.main_class_name} ${style.main_class_num}`}>
              {ai.number}
            </div>
            <div className={`${style.main_class_name} ${style.class_title}`}>
              <Sms></Sms>
              <span>
                <Link
                  href={
                    "/community/" + ai.category + "/" + ai._id + "?name=" + name
                  }
                  className={style.link}
                >
                  {ai.title}
                </Link>
              </span>
              <span className={style.comment_style}>[{ai.comment}]</span>
            </div>
            <div className={`${style.main_class_name} ${style.main_class_au}`}>
              {ai.writer}
            </div>
            <div className={`${style.main_class_name} ${style.class_date}`}>
              {datePart}
            </div>
            <div className={`${style.main_class_name} ${style.class_view}`}>
              {ai.views}
            </div>
            <div className={`${style.main_class_name} ${style.class_reco}`}>
              {ai.good}
            </div>
          </div>
        );
      })}
    </>
  );
}
