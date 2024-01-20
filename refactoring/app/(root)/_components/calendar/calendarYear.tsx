import { cn } from "@/lib/utils";
import { RefObject, useEffect } from "react";

interface CalendarYearAroundProps {
  year: number;
  isgray?: boolean;
  rmline?: number;
  sendYmd?: (tm: number, d: number) => void;
}
interface YearsFace {
  year: number;
  mon: "pre" | "cur" | "nxt";
}
interface MoveYmdProps {
  y: number;
  m: number;
  d: number;
  movingway: "pre"|"nxt";
  ref: RefObject<HTMLDivElement>;
}
const CalendarYearAround = ({
  year,
  isgray,
  rmline,
  sendYmd,
}: CalendarYearAroundProps) => {
  const Years: YearsFace[][] = [];
  const nowy = new Date().getFullYear();
  const year10 = Math.floor(year / 10) * 10;

  for (let i = 0; i < 3; i++) {
    Years.push([]);
    if (i != rmline) {
      for (let j = 0; j < 4; j++) {
        let t = i * 4 + j - 1;
        Years[i].push({
          year: t + year10,
          mon: t < 0 ? "pre" : t >= 10 ? "nxt" : "cur",
        });
      }
    }
  }

  return (
    <div className="flex h-full w-full flex-col flex-1">
      {Years.map((ai, i) => (
        <div
          key={i}
          className="text-center text-black text-xl font-normal h-full items-center w-full flex justify-stretch"
        >
          {ai.map((aj, j) => (
            <div
              key={j}
              className="flex items-center justify-center h-full w-full"
            >
              <div
                className={cn(
                  "cursor-pointer select-none hover:bg-yellow-200 w-[100px] h-[100px] flex items-center justify-center rounded-full ",
                  (isgray || aj.mon != "cur") && "text-gray-300",
                  aj.year == nowy && "bg-yellow-300",
                  !isgray &&
                    aj.year == nowy &&
                    "bg-yellow-300 hover:bg-yellow-300"
                )}
                onClick={() => {}}
              >
                {aj.year}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarYearAround;
