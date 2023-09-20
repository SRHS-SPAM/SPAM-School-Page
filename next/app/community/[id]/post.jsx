"use client";

import style from "./community_detail.module.css";
import Sms from "../../../public/svg/sms.svg";
import Link from "next/link";

export default function Post({ result, name }) {
  return (
    <>
      {result.map((post, i) => (
        <div className={style.writing_main_class} key={i}>
          <div className={`${style.main_class_name} ${style.main_class_num}`}>
            {post.number}
          </div>
          <div className={`${style.main_class_name} ${style.class_title}`}>
            <Sms></Sms>
            <span>
              <Link
                href={
                  "/community/" +
                  post.category +
                  "/" +
                  post._id +
                  "?name=" +
                  name
                }
                className={style.link}
              >
                {post.title}
              </Link>
            </span>
            <span className={style.comment_style}>[{post.comment}]</span>
          </div>
          <div className={`${style.main_class_name} ${style.main_class_au}`}>
            {post.writer}
          </div>
          <div className={`${style.main_class_name} ${style.class_date}`}>
            {post.date}
          </div>
          <div className={`${style.main_class_name} ${style.class_view}`}>
            {post.views}
          </div>
          <div className={`${style.main_class_name} ${style.class_reco}`}>
            {post.good}
          </div>
        </div>
      ))}
    </>
  );
}
