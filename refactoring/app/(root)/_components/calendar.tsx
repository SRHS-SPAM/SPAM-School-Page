"use client";

import { cn } from "@/lib/utils";
import CalendarAround from "./calendarAround";
import { ElementRef, use, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import CalendarMonth from "./calendarMonth";
import CalendarYear from "./calendarYear";

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
const Calender = ({ ymd, setymd }: CalendarProps) => {
  const currentDate = new Date();
  const nowy = currentDate.getFullYear();
  const nowm = currentDate.getMonth();
  const nowd = currentDate.getDate();
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const [isMoving, setIsMoving] = useState(false);
  const [isMonth, setIsMonth] = useState(true);
  const year10 = Math.floor(year / 10) * 10;

  const wrapRef = useRef<ElementRef<"div">>(null);
  const wrapYearRef = useRef<ElementRef<"div">>(null);
  const wrapWrapRef = useRef<ElementRef<"div">>(null);

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

  const fadeymd = (_ymd: number[]) => {
    if (setymd) {
      setIsMoving(true);
      if (wrapRef.current?.style.opacity != null) {
        wrapRef.current.style.opacity = "0";
      }
      setTimeout(() => {
        setymd(_ymd);
        if (wrapRef.current?.style.opacity != null) {
          wrapRef.current.style.opacity = "1";
        }
        setTimeout(() => {
          setIsMoving(false);
        }, 300);
      }, 300);
    }
  };

  const wrapChange = () => {
    setIsMoving(true);
    if (wrapWrapRef.current?.style.left != null) {
      if (isMonth) {
        wrapWrapRef.current.style.left = "-100%";
      } else {
        wrapWrapRef.current.style.left = "0%";
      }
      setTimeout(() => {
        setIsMoving(isMoving);
        setIsMonth(!isMonth);
      }, 300);
    }
  };

  return (
    <div className="h-full w-full p-8 flex flex-col items-start">
      <div className="flex justify-between items-center w-full">
        <div onClick={wrapChange} className="text-3xl font-bold cursor-pointer">
          {isMonth ? (
            <>
              {Month[month]} {year}
            </>
          ) : (
            <>
              {year10} ~ {year10 + 9}
            </>
          )}
        </div>
        {setymd && (
          <div className="flex items-center gap-2">
            {(nowy != year || nowm != month || nowd != date) && (
              <RotateCcw
                className="h-6 w-6"
                onClick={() => fadeymd([nowy, nowm, nowd])}
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
      <div className="mt-8 text-gray-300 w-full h-full relative overflow-x-hidden font-light">
        <div
          ref={wrapWrapRef}
          className={cn(
            "absolute w-[200%] left-0 h-full flex",
            isMoving && "transition-all ease-ease duration-300"
          )}
        >
          <CalendarMonth
            isMoving={isMoving}
            wrapRef={wrapRef}
            ymd={ymd}
            sendYmd={sendYmd}
            setymd={setymd}
          />
          <CalendarYear
            isMoving={isMoving}
            wrapRef={wrapYearRef}
            ymd={ymd}
            sendYmd={sendYmd}
            setymd={setymd}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
