"use client";
import { useState } from "react";
import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Script from "next/script";
import styles from "./calendar.module.css";
import LeftArrow from "./svg/arrowLeft.svg";
import RightArrow from "./svg/arrowRight.svg";
import Calendar from "@/components/Calendar";

export default function CalendarPage() {
  let arrowColor = "#0067C0";
  let timetable = [
    "빅데이터",
    "빅데이터",
    "빅데이터",
    "회화",
    "산업용로봇제어",
    "산업용로봇제어",
    "산업용로봇제어",
  ];
  let daystr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let handay = ["일", "월", "화", "수", "목", "금", "토"];
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let mp = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
  ];
  let hp = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
  ];
  const currentDate = new Date(); //현재 날짜
  const [array, setArray] = useState([
    //array는 날짜(25), 월(12), 년도(2023), bool값을 각각 저장한다.
    currentDate.getDate(),
    currentDate.getMonth(),
    currentDate.getFullYear(),
    false,
    currentDate.getFullYear(),
    currentDate.getMonth(),
  ]);
  const today = array[0], //state로서 선언된 array에서 날짜를 옮겨 닮는다. 오늘이 아닐 수 도 있다.
    month = array[1], //state로서 선언된 array에서 월를 옮겨 닮는다. 이번 달이 아닐 수 도 있다.
    year = array[2], //state로서 선언된 array에서 년도를 옮겨 닮는다. 올해기 아닐 수 도 있다.
    isYear = array[3];
    const firstDate = new Date(year, month, 1); //설정된 날짜의 첫 날로서 생성한다. 시작 요일을 구하기 위함이다.
    const setDate = new Date(year, month, today); //설정된 날짜, 그 자체로서 생성한다.
    const temp2 = new Date(year, month, 0); //설정된 날짜의 달의 날 수를 구하기 위해
    const temp = new Date(month == 11 ? year + 1 : year, (month + 1) % 12, 0); //다음 달의 날 수를 담는다..?
    const firstCnt = firstDate.getDay(); //시작 요일을 옮겨 담는다.
    const days = temp.getDate(), //다음 달의 날 수를 담는다..?
      dayys = temp2.getDate(); //마지막 날을 담는다.
    const cnt = firstCnt == 0 ? -7 : -firstCnt; //실질적으로 표시를 하기 위해 가중치를 설정한다.
  return (
    <div>
      <div className={styles.calendar_mainbox}>
        <div className={styles.cal_topbox}>
          <div className={styles.cal_arrowbox}>
            <Arrow location="/" mod={1} />
          </div>
          <div className={styles.cal_maintxt}>Calendar</div>
          <div className={`${styles.bars} ${styles.mypage_bars}`} id="bar">
            <Menubar></Menubar>
          </div>
        </div>
        <div className={styles.cal_subbox}>
          <div className={`${styles.cal_box} ${styles.cal_box1}`}>
            <div className={styles.cal_box_black}>
              <div className={styles.cal_subbox_top}>
                {isYear ? (
                  <div className={styles.cal_box_text}>
                    <LeftArrow
                      fill={arrowColor}
                      className={styles.svg}
                      onClick={() => {
                        let copy = [...array];
                        copy[3] = false;
                        setArray(copy);
                      }}
                    ></LeftArrow>
                    {year}
                  </div>
                ) : (
                  <div className={styles.cal_box_text}>
                    {`${monthList[month]} ${year} `}
                    <RightArrow
                      fill={arrowColor}
                      className={styles.svg}
                      onClick={() => {
                        let copy = [...array];
                        copy[3] = true;
                        setArray(copy);
                      }}
                    ></RightArrow>
                  </div>
                )}
                {isYear ? (
                  <div className={styles.cal_arrow_box}>
                    <LeftArrow
                      fill={arrowColor}
                      className={styles.svg}
                      onClick={() => {
                        console.log("prev-year");
                        let copy = [...array];
                        copy[2]--;
                        copy[4]=copy[2];
                        setArray(copy);
                      }}
                    ></LeftArrow>
                    Year
                    <RightArrow
                      fill={arrowColor}
                      className={styles.svg}
                      onClick={() => {
                        console.log("next-year");
                        let copy = [...array];
                        copy[2]++;
                        copy[4]=copy[2];
                        setArray(copy);
                      }}
                    ></RightArrow>
                  </div>
                ) : (
                  <div className={styles.cal_arrow_box}>
                    <LeftArrow
                      fill={arrowColor}
                      className={styles.svg}
                      onClick={() => {
                        console.log("prev-month");
                        let copy = [...array];
                        copy[1]--;
                        if (copy[1] < 0) {
                          copy[1] += 12;
                          copy[2]--;
                        }
                        copy[4]=copy[2];
                        copy[5]=copy[1];
                        setArray(copy);
                      }}
                    ></LeftArrow>
                    Month
                    <RightArrow
                      fill={arrowColor}
                      className={styles.svg}
                      onClick={() => {
                        console.log("next-month");
                        let copy = [...array];
                        copy[1]++;
                        if (copy[1] >= 12) {
                          copy[1] -= 12;
                          copy[2]++;
                        }
                        copy[4]=copy[2];
                        copy[5]=copy[1];
                        setArray(copy);
                      }}
                    ></RightArrow>
                  </div>
                )}
              </div>
              {isYear ? (
                <table className={styles.cal_subbox_main}>
                  <tbody>
                    {hp.map((row, i) => (
                      <tr key={i}>
                        {row.map((mon, j) => (
                          <td
                            onClick={() => {
                              let copy = [...array];
                              copy[1] = mon;
                              copy[3] = false;
                              copy[5]=copy[1];
                              setArray(copy);
                            }}
                            onMouseEnter={() => {
                              let copy = [...array];
                              copy[4]=year;
                              copy[5]=mon;
                              setArray(copy);
                            }}
                            onMouseLeave={() => {
                              let copy = [...array];
                              copy[4]=year;
                              copy[5]=month;
                              setArray(copy);
                            }}
                            className={
                              mon == month ? `${styles.today}` : ``
                            }
                            key={j}
                          >
                            <div>
                              <div>{monthList[mon]}</div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className={styles.cal_subbox_main}>
        <thead>
          <tr>
            {daystr.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mp.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  onClick={() => {
                    console.log("first");
                    let copy = [...array];
                    if (cnt + day < 0) {
                      copy[0] = cnt + day + dayys + 1;
                      copy[1]--;
                      if (copy[1] < 0) {
                        copy[2]--;
                        copy[1] += 12;
                      }
                    } else if (cnt + day >= days) {
                      copy[0] = cnt + day - days + 1;
                      copy[1]++;
                      if (copy[1] >= 12) {
                        copy[2]++;
                        copy[1] -= 12;
                      }
                    } else {
                      copy[0] = cnt + day + 1;
                    }
                    copy[4]=copy[2];
                    copy[5]=copy[1];
                    setArray(copy);
                  }}
                  className={
                    cnt + day < 0 || cnt + day >= days
                      ? `${styles.disabled_day}`
                      : today == cnt + day + 1
                      ? `${styles.today}`
                      : ``
                  }
                  key={j}
                >
                  <div>
                    <div>
                      {
                        cnt + day < 0 //시작 값과 가중치를 더했을 때 음수라면,
                          ? cnt + day + dayys + 1 //저번 달의 날짜를 출력한다.
                          : cnt + day >= days //만약에 양수라서 이리 오고, 또한 이번 달의 날짜 이상이라면?
                          ? cnt + day - days + 1 //다음 달의 날짜를 표시한다.
                          : cnt + day + 1 //아니라면 그냥 이번 달의 특정 날짜를 출력한다.
                      }
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
              )}
            </div>
          </div>

          <div className={`${styles.cal_box} ${styles.cal_box2}`}>
            <div className={styles.cal_box_black}>
              {isYear ? (
                <div className={styles.cal_box_right}>
                  <div className={styles.cal_subbox_top}>
                    <div className={styles.cal_box_text}>
                      {`${monthList[array[5]]} ${array[4]} `}
                    </div>
                  </div>
                  <Calendar Year={array[4]} Month={array[5]} Today={0}/>
                </div>
              ) : (
                <div className={styles.cal_box_right}>
                  <div className={styles.cal_box_right_top}>
                    {year == currentDate.getFullYear() ? " " : year + "년 "}
                    {month + 1}월 {today}일{" "}
                    {"(" + handay[setDate.getDay()] + ")"} 시간표
                  </div>
                  <div className={styles.cal_box_right_main}>
                    {timetable.map((ai, i) => (
                      <li key={i}>
                        <div className={styles.cal_timetable_container}>
                          {i + 1}교시 :&nbsp;
                          <span className={styles.cal_timetable_main}>
                            {ai}
                          </span>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://kit.fontawesome.com/75ea5a755a.js"
        crossorigin="anonymous"
      ></Script>
    </div>
  );
}
