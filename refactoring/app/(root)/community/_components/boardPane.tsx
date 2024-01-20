import { ChevronRight, Goal } from "lucide-react";
import Link from "next/link";
import CommunityItem from "./communityItem";

interface DataFace {
  title: string;
  good?: number;
  views?: number;
  commentcnt?: number; //그냥 이렇게 넘겨도 될려나?
  link: string;
  board?: string;
}

interface BoardPaneProps {
  title: string;
  link: string; //추후 올바른 타입으로 변환 요망
  isfull?: boolean;
  data: DataFace[];
}

const BoardPane = ({ title, link, data, isfull }: BoardPaneProps) => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-between ml-2 mb-2 w-full items-center border-b border-yellow-300">
        <div className="text-2xl font-bold">{title}</div>
        <Link className="flex flex-col justify-between" href={link}>
          <div>더보기</div>
          <ChevronRight />
        </Link>
      </div>
      <div className="flex flex-col w-full pt-2 pl-2 gap-2">
        {" "}
        {/*패딩만 바꾸면 조절 가능*/}
        {data.map((ai, i) => (
          <CommunityItem
            key={i}
            title={ai.title}
            link={ai.link}
            good={ai.good}
            views={ai.views}
            board={ai.board}
            commentcnt={ai.commentcnt}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardPane;
