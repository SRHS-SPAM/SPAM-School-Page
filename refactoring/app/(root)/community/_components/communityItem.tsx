import { Eye, MessageSquareIcon, ThumbsUp } from "lucide-react";
import IconComp from "./IconComp";
import React from "react";
import Link from "next/link";

interface IconCompProps {
  icon: React.JSX.Element;
}

interface DataFace {
  title: string;
  good?: number;
  views?: number;
  commentcnt?: number;
  link: string;
  board?: string;
}

const CommunityItem = ({
  title,
  board,
  commentcnt,
  good,
  link,
  views,
}: DataFace) => {
  return (
    <>
      <Link href={link} className="flex gap-4">
        {board && (
          <div className="w-[95px] rounded-md border-[0.5px] border-gray-400 text-center">
            {board}
          </div>
        )}
        {title && <div className="w-full pl-2 pr-2">{title}</div>}
        {good && (
          <IconComp icon={<ThumbsUp className="h-4 w-4" />} value={good} />
        )}
        {commentcnt && (
          <IconComp
            icon={<MessageSquareIcon className="h-4 w-4" />}
            value={commentcnt}
          />
        )}
        {views && <IconComp icon={<Eye className="h-4 w-4" />} value={views} />}
      </Link>
    </>
  );
};

export default CommunityItem;
