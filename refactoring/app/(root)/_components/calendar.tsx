"use client";

import { cn } from "@/lib/utils";
import CalendarAround from "./calendar/calendarDate";
import { ElementRef, RefObject, use, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import CalendarMonth from "./calendar/calendarDateWrap";
import CalendarYear from "./calendar/calendarYearWrap";
import CalendarHead from "./calendar/calendarHead";

interface CalendarProps {
  ymd: number[];
  setymd?: ([]) => void;
}

interface DatesFace {
  date: number;
  mon: "pre" | "cur" | "nxt";
}

interface MoveYmdProps {
  y: number;
  m: number;
  d: number;
  movingway: "pre"|"nxt"|"cur";
  ref: RefObject<HTMLDivElement>;
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

  const moveymd = ({y, m, d, movingway, ref}:MoveYmdProps) => {
    if (setymd) {
      if (movingway=="cur") {
        setymd([y, m, d]);
      } else if (ref.current?.style.top != null) {
        setIsMoving(true);
        if (movingway=="pre") ref.current.style.top = "0%";
        else if (movingway=="nxt") ref.current.style.top = "-200%";
        setTimeout(() => {
          setIsMoving(false);
          if (ref.current?.style.top != null) {
            ref.current.style.top = "-100%";
          }
          setymd([y, m, d]);
        }, 500);
      }
    }
  };

  const fadeymd = () => {
    if (setymd) {
      setIsMoving(true);
      if (wrapWrapRef.current?.style.opacity != null) {
        wrapWrapRef.current.style.opacity = "0";
      }
      setTimeout(() => {
        setymd([nowy, nowm, nowd]);
        if (wrapWrapRef.current?.style.opacity != null) {
          wrapWrapRef.current.style.opacity = "1";
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
      <CalendarHead
          fadeymd={fadeymd}
          isequal={nowy == year && nowm == month && nowd == date}
          issetable={setymd == undefined ? true : false}
          moveymd={moveymd}
          title={isMonth?
            <>
              {year10} ~ {year10 + 9}
            </>:
            <>
              {Month[month]} {year}
            </>
          }
          wrapChange={wrapChange}
        />
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
            moveymd={moveymd}
            setymd={setymd}
          />
          <CalendarYear
            isMoving={isMoving}
            wrapRef={wrapYearRef}
            ymd={ymd}
            moveymd={moveymd}
            setymd={setymd}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;
