import { cn } from "@/lib/utils";

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
const Dates = [
  [
    { date: 28, mon: "pre" },
    { date: 29, mon: "pre" },
    { date: 30, mon: "pre" },
    { date: 31, mon: "pre" },
    { date: 1, mon: "cur" },
    { date: 2, mon: "cur" },
    { date: 3, mon: "cur" },
  ],
  [
    { date: 28, mon: "pre" },
    { date: 29, mon: "pre" },
    { date: 30, mon: "pre" },
    { date: 31, mon: "pre" },
    { date: 1, mon: "cur" },
    { date: 2, mon: "cur" },
    { date: 3, mon: "cur" },
  ],
  [
    { date: 28, mon: "pre" },
    { date: 29, mon: "pre" },
    { date: 30, mon: "pre" },
    { date: 31, mon: "pre" },
    { date: 1, mon: "cur" },
    { date: 2, mon: "cur" },
    { date: 3, mon: "cur" },
  ],
  [
    { date: 28, mon: "pre" },
    { date: 29, mon: "pre" },
    { date: 30, mon: "pre" },
    { date: 31, mon: "pre" },
    { date: 1, mon: "cur" },
    { date: 2, mon: "cur" },
    { date: 3, mon: "cur" },
  ],
  [
    { date: 28, mon: "pre" },
    { date: 29, mon: "pre" },
    { date: 30, mon: "pre" },
    { date: 31, mon: "pre" },
    { date: 1, mon: "cur" },
    { date: 2, mon: "cur" },
    { date: 3, mon: "cur" },
  ],
  [
    { date: 28, mon: "pre" },
    { date: 29, mon: "pre" },
    { date: 30, mon: "pre" },
    { date: 31, mon: "pre" },
    { date: 1, mon: "cur" },
    { date: 2, mon: "cur" },
    { date: 3, mon: "cur" },
  ],
];
const Calander = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  return (
    <div className="h-full w-full p-8 flex flex-col items-start">
      <p className="text-3xl">
        {Month[month]} {year}
      </p>
      <table className="bg-white mt-8 text-gray-300 w-full h-full font-light table-fixed">
        <thead>
          <tr className="text-center w-full">
            {Day.map((ai, i) => (
              <th key={i}>{ai}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Dates.map((ai, i) => (
            <tr key={i} className="text-center">
              {ai.map((aj, j) => (
                <td key={j} className={cn("py-2 px-4", aj.mon=="cur"&&"text-black")}>{aj.date}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calander;
