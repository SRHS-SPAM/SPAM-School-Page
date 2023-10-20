"use client";
import Link from "next/link";
import styles from "./calendar.module.css";
import { useEffect, useState } from "react";

export default function Timetable({ grade, classs, date }) {
  const [timetable, setTable] = useState([
    ["Loading"],
    ["Loading"],
    ["Loading"],
    ["Loading"],
    ["Loading"],
    ["Loading"],
    ["Loading"],
  ]);
  useEffect(() => {
    console.log(grade + classs + date);
    let arr = [[], [], [], [], [], [], []];
    fetch(
      "https://open.neis.go.kr/hub/hisTimetable?KEY=537d4634e7bf4623bf69fc69593ce4c9&Type=json&pIndex=1&pSize=15&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010738&GRADE=" +
        grade +
        "&CLASS_NM=" +
        classs +
        "&ALL_TI_YMD=" +
        date
    ) //그러면 위의 주소를 여기에 넣으면 된다.
      .then(
        (res) => res.json() //(리턴값으로 json으로 변환)
      )
      .then((response) => {
        //여기에 다시 then을 하고 res를 가져온다.
        console.log(response);
        if (response.RESULT == undefined) {
          response.hisTimetable[1].row.map((ai, i) => {
            console.log(ai);
            /** @todo error */
            arr[ai.PERIO - 1].push(ai.ITRT_CNTNT);
            if (
              arr[ai.PERIO - 1].length > 1 &&
              arr[ai.PERIO - 1][0] == arr[ai.PERIO - 1][1]
            ) {
              arr[ai.PERIO - 1].pop();
            }
          });
          setTable(arr);
        } else {
          arr = [
            ["데이터 존재하지 않음"],
            ["데이터 존재하지 않음"],
            ["데이터 존재하지 않음"],
            ["데이터 존재하지 않음"],
          ];
          setTable(arr);
        }
      });
  }, [grade, classs, date]);
  return (
    <>
      {timetable.map((ai, i) => {
        <>
          {/*ai.map((aj, j) => (
          <li key={i}>
            <div className={styles.cal_timetable_container}>
              {i + 1}교시 :&nbsp;
              <span className={styles.cal_timetable_main}>{a}</span>
            </div>
          </li>
        ))*/}
          {ai[0] != null ? (
            <li key={i}>
              <div className={styles.cal_timetable_container}>
                {i + 1}교시 :&nbsp;
                <span className={styles.cal_timetable_main}>{ai[0]}</span>
              </div>
            </li>
          ) : (
            <></>
          )}
        </>;
      })}
    </>
  );
}
