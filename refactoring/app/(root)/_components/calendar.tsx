"use client";

import { cn } from "@/lib/utils";
import CalendarAround from "./calendarAround";
import { ElementRef, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Home, RotateCcw } from "lucide-react";
import Link from "next/link";

interface CalendarProps {
  ymd: number[];
  setymd?: ([]) => void;
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
    if (setymd) {
      if (month == m) {
        setymd([y, m, d]);
      } else if (wrapRef.current?.style.top != null) {
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
    }
  };

  return (
    <div className="h-full w-full p-8 flex flex-col items-start">
      <div className="flex justify-between items-center w-full">
        <Link href={"/calendar"} className="text-3xl font-bold">
          {Month[month]} {year}
        </Link>
        {setymd && (
          <div className="flex items-center gap-2">
            {(nowy != year || nowm != month || nowd != date) && (
              <RotateCcw
                className="h-6 w-6"
                onClick={() => setymd([nowy, nowm, nowd])}
                role="button"
              />
            )}
            <ChevronLeft
              className="h-8 w-8"
              onClick={() => sendYmd(-1, date)}
              role="button"
            />
            <ChevronRight
              className="h-8 w-8"
              onClick={() => sendYmd(1, date)}
              role="button"
            />
          </div>
        )}
      </div>
      <div className="mt-8 text-gray-300 w-full h-full">
        <div className="w-full font-light h-full flex-col flex">
          <div className="text-center w-full bg-white flex justify-stretch">
            {Day.map((ai, i) => (
              <div key={i} className="w-full select-none">
                {ai}
              </div>
            ))}
          </div>
          <div className="h-full w-full relative overflow-y-hidden">
            <div
              ref={wrapRef}
              className={cn(
                "h-[300%] w-full top-[-100%] absolute flex flex-col justify-stretch",
                isMoving && "transition-all ease-ease duration-300"
              )}
            >
              <CalendarAround
                year={pre.getFullYear()}
                month={pre.getMonth()}
                isgray={true}
                date={pre.getDate()}
              />
              <CalendarAround
                year={year}
                month={month}
                date={date}
                sendYmd={isMoving || !setymd ? undefined : sendYmd}
              />
              <CalendarAround
                year={nxt.getFullYear()}
                month={nxt.getMonth()}
                date={nxt.getDate()}
                isgray={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
