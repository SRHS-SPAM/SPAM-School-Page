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

  const wrapRef = useRef<ElementRef<"div">>(null);

  const sendYmd = (tm: number, d: number) => {
    let m = tm + month;
    let y = m < 0 ? year - 1 : m > 11 ? year + 1 : year;
    if(month == m) {
        setymd([y, m, d]);
    }
    else if (wrapRef.current?.style.top != null) {
    setIsMoving(true);
      if (m < month) wrapRef.current.style.top = "0%";
      else if (m > month) wrapRef.current.style.top = "-200%";
      setTimeout(() => {
        setIsMoving(false);
        if (wrapRef.current?.style.top != null) {
          wrapRef.current.style.top = "-100%";
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
      <div className="mt-8 text-gray-300 w-full h-full">
        <div className="w-full font-light h-full flex-col flex">
          <div className="text-center w-full bg-white flex justify-stretch">
            {Day.map((ai, i) => (
              <div key={i} className="w-full">{ai}</div>
            ))}
          </div>
          <div className="h-full w-full relative overflow-y-hidden">
            <div
              ref={wrapRef}
              className={cn(
                "h-[300%] w-full top-[-100%] absolute flex flex-col justify-stretch",
                isMoving && "transition-all ease-ease duration-500"
              )}
            >
              <CalendarAround
                year={pre.getFullYear()}
                month={pre.getMonth()}
                isgray={true}
                date={pre.getDate()}
                sendYmd={() => {}}
              />
              <CalendarAround
                year={year}
                month={month}
                date={date}
                sendYmd={isMoving ? () => {} : sendYmd}
              />
              <CalendarAround
                year={nxt.getFullYear()}
                month={nxt.getMonth()}
                date={nxt.getDate()}
                isgray={true}
                sendYmd={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
