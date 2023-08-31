"use client"
import { use, useState } from 'react';
import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import Script from "next/script";
import styles from "./calendar.module.css";

export default function CalendarPage() {
  let daystr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
  const currentDate = new Date();
  const [array, setArray] = useState([currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear()]);
  const today = array[0], month = array[1], year = array[2];
  const firstDate = new Date(year, month, 1);
  const temp = new Date(month==11?year+1:year, (month+1)%12, 0);
  const temp2 = new Date(year, month, 0);
  const firstCnt = firstDate.getDay();
  const days = temp.getDate(), dayys = temp2.getDate();
  const cnt = ( firstCnt == 0 ) ? -7 : -firstCnt;
  console.log("days: " + days + ", dayys: " + dayys);
  return (
    <div>
      <div className={styles.calendar_mainbox}>
        <div className={styles.cal_topbox}>
          <div className={styles.cal_arrowbox}>
            <Arrow location="/" />
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
                <div className={styles.cal_box_text}>
                  {`${monthList[month]} ${year} `}
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className={styles.cal_arrow_box}>
                  <i className="fa-solid fa-chevron-left"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
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
                    <tr>
                      {week.map((day, j) => (
                        <td
                          className={
                            cnt + day < 0 || cnt + day >= days
                              ? `${styles.disabled_day}`
                              : today == ( cnt + day + 1 )
                              ? `${styles.today}`
                              : ``
                          }
                          onClick={ ()=>{ 
                            let copy = [...array];
                            if(cnt + day < 0){
                              copy[0] = cnt + day + dayys + 1;
                              copy[1]--;
                              if(copy[1]<0) {
                                copy[2]--;
                                copy[1]+=12;
                              }
                            }
                            else if(cnt + day >= days) {
                              copy[0] = cnt + day - days + 1;
                              copy[1]++;
                              if(copy[1]>=12) {
                                copy[2]++;
                                copy[1]-=12;
                              }
                            }
                            else {
                              copy[0] = cnt + day + 1;
                            }
                            setArray(copy);
                          }}  
                        >
                          {
                            cnt + day < 0 
                            ? cnt + day + dayys + 1
                            : cnt + day >= days 
                            ? cnt + day - days + 1
                            : cnt + day + 1
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${styles.cal_box} ${styles.cal_box2}`}>
            <div className={styles.cal_box_black}>
              <div className={styles.cal_subbox_top}>
                <div className={styles.cal_box_text}>
                  March 2023
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className={styles.cal_arrow_box}>
                  <i className="fa-solid fa-chevron-left"></i>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
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

