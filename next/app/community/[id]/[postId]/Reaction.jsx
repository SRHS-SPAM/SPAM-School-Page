"use client";

import styles from "./writing_detail.module.css";
import ThumbsUp from "../../../../public/svg/thumbsUp.svg";
import ThumbsDown from "../../../../public/svg/thumbsDown.svg";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default function Reaction(props) {
  const good = async () => {
    try {
      let db = (await connectDB).db("SRH-Community");
      let data = await db
        .collection("post")
        .findOneAndUpdate(
          { _id: new ObjectId(props.postId) },
          { $inc: { good: 1 } }
        );
    } catch (error) {
      console.error(error);
    }
  };
  const bad = async () => {
    try {
      let db = (await connectDB).db("SRH-Community");
      let data = await db
        .collection("post")
        .findOneAndUpdate(
          { _id: new ObjectId(props.postId) },
          { $inc: { good: 1 } }
        );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={styles.write_d_thumbs_up} onClick={() => good()}>
        {/**
         * @todo findOneAndUpdate 사용하면 순차적으로 처리되서 동시성 됨 ㅇㅇ
         * 그걸로 만드셈
         * tlqkf
         */}
        <ThumbsUp></ThumbsUp>
        추천 {props.good}
      </div>
      <div className={styles.write_d_thumbs_down} onClick={() => bad()}>
        <ThumbsDown></ThumbsDown>
        비추천 {props.bad}
      </div>
    </>
  );
}
