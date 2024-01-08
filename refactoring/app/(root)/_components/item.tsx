"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Item = () => {
  return (
    <div className="flex flex-col justify-between p-6 h-full w-full rounded-2xl drop-shadow-2xl bg-white">
        <div>
      <p className="text-2xl font-bold">아이템제목</p>
      <p>아이템상세</p></div>
      <div className="text-yellow-400 flex items-center justify-end">
        <Link href="#">자세히 보기</Link>
        <ChevronRight className="h-8 w-8"/>
      </div>
    </div>
  );
};

export default Item;
