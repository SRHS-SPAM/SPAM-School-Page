import { cn } from "@/lib/utils";
import CalendarAround from "./calendarAround";
import CalendarYearAround from "./calendarYearAround";

interface CalendarYearProps {
  ymd: number[];
  isMoving: boolean;
  sendYmd?: (tm: number, d: number) => void;
  setymd?: ([]) => void;
  wrapRef: any; //이건 또 뭘려나
}
const CalendarYear = ({
  ymd,
  isMoving,
  sendYmd,
  setymd,
  wrapRef,
}: CalendarYearProps) => {
  const year = ymd[0];
  return (
    <div className="w-1/2 flex flex-col h-full">
      <div className="h-full w-full relative overflow-y-hidden">
        <div
          ref={wrapRef}
          className={cn(
            "h-[300%] w-full top-[-100%] absolute flex flex-col justify-stretch opacity-100",
            isMoving && "transition-all ease-ease duration-300"
          )}
        >
          <CalendarYearAround
            year={year-10}
            isgray={true}
            rmline={2}
          />
          <CalendarYearAround
            year={year}
            sendYmd={isMoving || !setymd ? undefined : sendYmd}
          />
          <CalendarYearAround
            year={year+10}
            isgray={true}
            rmline={0}
        />
        </div>
      </div>
    </div>
  );
};

export default CalendarYear;
