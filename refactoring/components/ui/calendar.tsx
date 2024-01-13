import { cn } from "@/lib/utils";
import CalendarAround from "./calendar-around";

interface CalendarProps {
  ymd: number[];
}

interface DatesFace {
  date: number;
  mon: "pre" | "cur" | "nxt";
}

const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Calender = ({ ymd }: CalendarProps) => {
  const currentDate = new Date();
  const nowy = currentDate.getFullYear();
  const nowm = currentDate.getMonth();
  const nowd = currentDate.getDate();
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const pre = new Date(year, month - 1, date);
  const nxt = new Date(year, month + 1, date);

  return (
    <div className="h-full w-full p-8 flex flex-col items-start">
      <p className="text-3xl font-bold">
        {Month[month]} {year}
      </p>
      <div className="mt-8 text-gray-300 w-full h-full overflow-y-hidden">
        <table className="w-full font-light table-fixed">
          <thead>
            <tr className="text-center w-full">
              {Day.map((ai, i) => (
                <th key={i}>{ai}</th>
              ))}
            </tr>
          </thead>
          <tbody className="h-[180vh] w-full top-[-55vh] relative">
            <CalendarAround
              year={pre.getFullYear()}
              month={pre.getMonth()}
              isgray={true}
              remove={5}
              date={pre.getDate()}
            />
            <CalendarAround year={year} month={month} date={date} />
            <CalendarAround
              year={nxt.getFullYear()}
              month={nxt.getMonth()}
              date={nxt.getDate()}
              isgray={true}
              remove={0}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calender;
