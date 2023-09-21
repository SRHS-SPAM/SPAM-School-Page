import Link from "next/link";
import styles from "./calendar.module.css";
import { useEffect } from "react";

export default function Timetable({ grade, classs, date }) {
  let timetable = [];
  useEffect(() => {
    const fetchFun = () =>
      fetch(
        "https://open.neis.go.kr/hub/hisTimetable?KEY=537d4634e7bf4623bf69fc69593ce4c9&Type=json&pIndex=1&pSize=15&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010738&GRADE=" +
          grade +
          "&CLASS_NM=" +
          classs +
          "&ALL_TI_YMD=" +
          date
      ) //그러면 위의 주소를 여기에 넣으면 된다.
        .then(
          (res) => res.json //(리턴값으로 json으로 변환)
        )
        .then((data) => {
          //여기에 다시 then을 하고 data를 가져온다.
          data.hisTimetable.row.map((ai, i) => {
            console.log(ai);
            timetable.push(ai["ITRT_CNTNT"]);
          });
        });
  }, []);
  return (
    <>
      {timetable.map((ai, i) => (
        <li key={i}>
          <div className={styles.cal_timetable_container}>
            {i + 1}교시 :&nbsp;
            <span className={styles.cal_timetable_main}>{ai}</span>
          </div>
        </li>
      ))}
    </>
  );
}
