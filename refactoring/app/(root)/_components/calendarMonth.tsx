import { cn } from "@/lib/utils";
import CalendarAround from "./calendarAround";

interface CalendarMonthProps {
  ymd: number[];
  isMoving: boolean;
  sendYmd?: (tm: number, d: number) => void;
  setymd?: ([]) => void;
  wrapRef: any //이건 또 뭘려나
}
const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarMonth = ({ymd, isMoving, sendYmd, setymd, wrapRef}:CalendarMonthProps) => {
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const pre = new Date(year, month - 1, date);
  const nxt = new Date(year, month + 1, date);
  return (
    <div className="flex flex-col w-1/2 h-full">
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
            "h-[300%] w-full top-[-100%] absolute flex flex-col justify-stretch opacity-100",
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
  );
};

export default CalendarMonth;