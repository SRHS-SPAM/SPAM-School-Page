"use client";
import Link from "next/link";
import styles from "./MiniCalendar.module.css";
import { useState } from "react";

export default function MiniCalendar({ Year, Month, Today }) {
  const [array, setArray] = useState([
    //array는 날짜(25), 월(12), 년도(2023), bool값을 각각 저장한다.
    Today,
    Month,
    Year,
  ]);
  const today = array[0], //state로서 선언된 array에서 날짜를 옮겨 닮는다. 오늘이 아닐 수 도 있다.
    month = array[1], //state로서 선언된 array에서 월를 옮겨 닮는다. 이번 달이 아닐 수 도 있다.
    year = array[2]; //state로서 선언된 array에서 년도를 옮겨 닮는다. 올해기 아닐 수 도 있다.
  let daystr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let monthList = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octeober",
    "November",
    "December",
  ];
  let mp = [
    [0, 7, 14, 21, 28, 35],
    [0 + 1, 7 + 1, 14 + 1, 21 + 1, 28 + 1, 35 + 1],
    [0 + 1 + 1, 7 + 1 + 1, 14 + 1 + 1, 21 + 1 + 1, 28 + 1 + 1, 35 + 1 + 1],
    [
      0 + 1 + 1 + 1,
      7 + 1 + 1 + 1,
      14 + 1 + 1 + 1,
      21 + 1 + 1 + 1,
      28 + 1 + 1 + 1,
      35 + 1 + 1 + 1,
    ],
    [
      0 + 1 + 1 + 1 + 1,
      7 + 1 + 1 + 1 + 1,
      14 + 1 + 1 + 1 + 1,
      21 + 1 + 1 + 1 + 1,
      28 + 1 + 1 + 1 + 1,
      35 + 1 + 1 + 1 + 1,
    ],
    [
      0 + 1 + 1 + 1 + 1 + 1,
      7 + 1 + 1 + 1 + 1 + 1,
      14 + 1 + 1 + 1 + 1 + 1,
      21 + 1 + 1 + 1 + 1 + 1,
      28 + 1 + 1 + 1 + 1 + 1,
      35 + 1 + 1 + 1 + 1 + 1,
    ],
    [
      0 + 1 + 1 + 1 + 1 + 1 + 1,
      7 + 1 + 1 + 1 + 1 + 1 + 1,
      14 + 1 + 1 + 1 + 1 + 1 + 1,
      21 + 1 + 1 + 1 + 1 + 1 + 1,
      28 + 1 + 1 + 1 + 1 + 1 + 1,
      35 + 1 + 1 + 1 + 1 + 1 + 1,
    ],
  ];
  const firstDate = new Date(year, month, 1); //설정된 날짜의 첫 날로서 생성한다. 시작 요일을 구하기 위함이다.
  const setDate = new Date(year, month, today); //설정된 날짜, 그 자체로서 생성한다.
  const temp2 = new Date(year, month, 0); //설정된 날짜의 달의 날 수를 구하기 위해
  const temp = new Date(month == 11 ? year + 1 : year, (month + 1) % 12, 0); //다음 달의 날 수를 담는다..?
  const firstCnt = firstDate.getDay(); //시작 요일을 옮겨 담는다.
  const days = temp.getDate(), //다음 달의 날 수를 담는다..?
    dayys = temp2.getDate(); //마지막 날을 담는다.
  const cnt = firstCnt == 0 ? -7 : -firstCnt; //실질적으로 표시를 하기 위해 가중치를 설정한다.
  return (
    <div className={styles.calendar}>
      <div className={styles.month_year}>
        {monthList[month]} {year}
      </div>

      <div className={styles.day}>
        {mp.map((week, i) => (
          <div className={styles.row}>
            <li>{daystr[i]}</li>
            {week.map((day, j) => (
              <li
                className={
                  cnt + day < 0 || cnt + day >= days
                    ? `${styles.op}`
                    : today == cnt + day + 1
                    ? `${styles.today}`
                    : ``
                }
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
                  setArray(copy);
                }}
                key={j}
              >
                {
                  cnt + day < 0 //시작 값과 가중치를 더했을 때 음수라면,
                    ? cnt + day + dayys + 1 //저번 달의 날짜를 출력한다.
                    : cnt + day >= days //만약에 양수라서 이리 오고, 또한 이번 달의 날짜 이상이라면?
                    ? cnt + day - days + 1 //다음 달의 날짜를 표시한다.
                    : cnt + day + 1 //아니라면 그냥 이번 달의 특정 날짜를 출력한다.
                }
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
