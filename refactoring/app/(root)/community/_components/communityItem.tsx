import { Eye, MessageSquareIcon, ThumbsUp } from "lucide-react";
import IconComp from "./IconComp";
import React from "react";

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
    <div className="flex gap-4">
      {board && <div className="w-[95px] rounded-md border-0 border-gray-400">{board}</div>}
      {title && <div className="w-full pl-2 pr-2">{title}</div>}
      {good && <IconComp icon={<ThumbsUp />} value={good} />}
      {commentcnt && <IconComp icon={<MessageSquareIcon/>} value={commentcnt} />}
      {views && <IconComp icon={<Eye />} value={views} />}
    </div>
  );
};

export default CommunityItem;
