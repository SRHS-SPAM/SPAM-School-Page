"use client"

import Image from "next/image";
import Navbar from "@/app/(root)/_components/navbar";
import React, { useEffect, useState } from "react";
import Calender from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import EventItem from "../../_components/event-item";

interface EventItemProps {
    title: string;
    dateStart: string;
    dateEnd: string;
    content: any; //DOM 엘리먼트 뭐임??
}

const Data:EventItemProps[] = [{title: "입학식",
    dateStart: "3월 21일(수)",
    dateEnd: "3월 21일(수)",
    content: <>입학식<br/><br/>8시 20분까지 등교.<br/>최소 7시 기상<br/><br/>단축수업 30분 있음.</>},

    {title: "졸업식",
    dateStart: "12월 13일(금)",
    dateEnd: "12월 13일(금)",
    content: <>졸업식<br/><br/>11시 20분까지 등교.<br/>최고 9시 기상<br/><br/>수고하셨습니다.</>},
]

export default function Home() {
  const [ymd, setYmd] = useState([2024,0,1]);
  useEffect(()=>{
    const initDate = new Date();
    setYmd([initDate.getFullYear(), initDate.getMonth(), initDate.getDate()]);
  }, []);
  
  return (
    <>
      <div className="flex flex-col items-center h-full">
        <div className="max-w-[1800px] w-full h-full">
          <div className="flex items-center p-8 h-full gap-12">
            <div className="w-[57%] h-full drop-shadow-2xl bg-white rounded-2xl">
              <Calender ymd={ymd}/>
            </div>
            <div className="w-[43%] h-full drop-shadow-2xl bg-white rounded-2xl flex flex-col p-6 justify-stretch">
                <p className="h-10">음력 2월 18일</p>
                <ScrollArea className="h-full p-4">
                    <div className="flex flex-col gap-8 mb-12">
                        {Data.map((ai, i)=>(
                            <EventItem key={i}
                            content={ai.content}
                            title={ai.title}
                            dateEnd={ai.dateEnd}
                            dateStart={ai.dateStart}/>
                        ))}
                    </div>
                </ScrollArea>
                <div className="h-[100px] flex justify-between items-end">
                    <input className="w-9/12 h-3/5 rounded-full bg-slate-300 px-8 placeholder:text-white text-white" placeholder="애 일정 추가"/>
                    <Plus className="max-w-[90px] w-full h-[90px] text-white bg-yellow-300 rounded-full" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
