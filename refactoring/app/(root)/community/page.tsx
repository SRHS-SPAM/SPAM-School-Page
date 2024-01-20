import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Community() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="max-w-[1800px] w-full">
          <div className="flex flex-col gap-12 items-center mb-12 w-full">
            <div className="p-8">
            <ScrollArea className="w-[3/5]">

            </ScrollArea>
            <div className="w-[2/5]"/>
            <hr/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
