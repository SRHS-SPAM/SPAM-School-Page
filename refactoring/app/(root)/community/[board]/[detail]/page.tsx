import React from "react";

interface DataFace {
  board?: string;
  title: string;
  good?: number;
  views?: number;
  commentcnt?: number; //그냥 이렇게 넘겨도 될려나?
  link: string;
}

interface DataArrFace {
  title: string;
  isSpecial?: boolean;
  link: string;
  data: DataFace[];
}

const Data: DataArrFace[] = [
  {
    title: "서로고 베스트", //지금 따로 변수명 정하긴 힘들다
    isSpecial: true,
    link: "#", //링크는 나중에
    data: [
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "자유",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
      {
        board: "전공",
        title: "Lorem ipsum dolor sit amet",
        good: 24,
        commentcnt: 23,
        link: "#",
      },
    ],
  },
  {
    title: "공지 사항",
    isSpecial: true,
    link: "#", //링크는 나중에
    data: [
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
    ],
  },
  {
    title: "전공",
    link: "#", //링크는 나중에
    data: [
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
    ],
  },
  {
    title: "학습",
    link: "#", //링크는 나중에
    data: [
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
    ],
  },
  {
    title: "자유",
    link: "#", //링크는 나중에
    data: [
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
    ],
  },
  {
    title: "자유",
    link: "#", //링크는 나중에
    data: [
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
    ],
  },
  {
    title: "자유",
    link: "#", //링크는 나중에
    data: [
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        views: 5293,
        link: "#",
      },
    ],
  },
];

export default function Community() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  return (
    <>
      <div className="flex flex-col items-center h-full">
        <div className="max-w-[1800px] w-full h-full">
          <div className="flex flex-col gap-12 items-center mb-12 w-full h-full">
          </div>
        </div>
      </div>
    </>
  );
}

