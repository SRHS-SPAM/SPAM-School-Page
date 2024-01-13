"use client";

import { cn } from "@/lib/utils";
import CalendarAround from "./calendar-around";
import { ElementRef, useEffect, useRef, useState } from "react";

interface CalendarProps {
  ymd: number[];
  setymd?: any;
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
const Calender = ({ ymd, setymd }: CalendarProps) => {
  const currentDate = new Date();
  const nowy = currentDate.getFullYear();
  const nowm = currentDate.getMonth();
  const nowd = currentDate.getDate();
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const pre = new Date(year, month - 1, date);
  const nxt = new Date(year, month + 1, date);
  const [isMoving, setIsMoving] = useState(false);

  const wrapRef = useRef<ElementRef<"tbody">>(null);

  const sendYmd = (tm: number, d: number) => {
    setIsMoving(true);
    let m = tm + month;
    let y = m < 0 ? year - 1 : m > 11 ? year + 1 : year;
    if (wrapRef.current?.style.top != null) {
      if (m < month) wrapRef.current.style.top = "0vh";
      else if (m > month) wrapRef.current.style.top = "-90vh";
      setTimeout(() => {
        setIsMoving(false);
        if (wrapRef.current?.style.top != null) {
          wrapRef.current.style.top = "-50vh";
        }
        m = (m + 12) % 12;
        setymd([y, m, d]);
      }, 500);
    }
  };

  return (
    <div className="h-full w-full p-8 flex flex-col items-start">
      <p className="text-3xl font-bold">
        {Month[month]} {year}
      </p>
      <div className="mt-8 text-gray-300 w-full h-full overflow-y-hidden">
        <table className="w-full font-light table-fixed">
          <thead>
            <tr className="text-center w-full bg-white">
              {Day.map((ai, i) => (
                <th key={i}>{ai}</th>
              ))}
            </tr>
          </thead>
          <tbody
            ref={wrapRef}
            className={cn(
              "h-[150vh] w-full top-[-50vh] relative",
              isMoving && "transition-all ease-ease duration-500"
            )}
          >
            <CalendarAround
              year={pre.getFullYear()}
              month={pre.getMonth()}
              isgray={true}
              remove={[5, 5]}
              date={pre.getDate()}
              sendYmd={sendYmd}
            />
            <CalendarAround
              year={year}
              month={month}
              date={date}
              sendYmd={sendYmd}
            />
            <CalendarAround
              year={nxt.getFullYear()}
              month={nxt.getMonth()}
              date={nxt.getDate()}
              isgray={true}
              remove={[0, 2]}
              sendYmd={sendYmd}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calender;
