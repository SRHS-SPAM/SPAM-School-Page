import Link from "next/link";
import styles from "./Calendar.module.css";

export default function Calendar({ Year, Month, Today }) {
  let daystr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let mp = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
  ];
  const firstDate = new Date(Year, Month, 1); //설정된 날짜의 첫 날로서 생성한다. 시작 요일을 구하기 위함이다.
  const setDate = new Date(Year, Month, Today); //설정된 날짜, 그 자체로서 생성한다.
  const temp2 = new Date(Year, Month, 0); //설정된 날짜의 달의 날 수를 구하기 위해
  const temp = new Date(Month == 11 ? Year + 1 : Year, (Month + 1) % 12, 0); //다음 달의 날 수를 담는다..?
  const firstCnt = firstDate.getDay(); //시작 요일을 옮겨 담는다.
  const days = temp.getDate(), //다음 달의 날 수를 담는다..?
    dayys = temp2.getDate(); //마지막 날을 담는다.
  const cnt = firstCnt == 0 ? -7 : -firstCnt; //실질적으로 표시를 하기 위해 가중치를 설정한다.
  return (
    <>
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
                  className={
                    cnt + day < 0 || cnt + day >= days
                      ? `${styles.disabled_day}`
                      : Today == cnt + day + 1
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
    </>
  );
}
