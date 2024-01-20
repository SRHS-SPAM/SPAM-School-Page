import { ThumbsUp } from "lucide-react";
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

const CommunityItem = ({title, board, commentcnt, good,link,views}:DataFace) => {
  return (
    <div className="flex flex-col">
      {
        (board && <div className="w-[95px] rounded-md border-0">
          {board}
        </div> ) 
        || (title && <div className="w-full pl-2 pr-2"> 
          {title}
        </div>) //나중에 그거 넣자.. 넓이 넘으면 "..." 표시 되는 거. 
        || (good && <IconComp icon={<ThumbsUp />} value={good}/>)
        || (commentcnt && <IconComp icon={<ThumbsUp />} value={commentcnt}/>)
        || (views && <IconComp icon={<ThumbsUp />} value={views}/>)
      }
    </div>
  )
}

export default CommunityItem;