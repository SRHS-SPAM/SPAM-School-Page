import Image from "next/image";
import Item from "./_components/item";
import Navbar from "./_components/navbar";
import React from "react";
import CalendarWrap from "./_components/calendarwrap";
import Carousel from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="max-w-[1800px] w-full">
          <div className="flex flex-col gap-12 items-center mb-12">
            <div className="grid grid-cols-2 grid-rows-2 p-12 h-[900px] gap-[100px] w-full">
              <Item />
              <Item />
              <div className="rounded-2xl col-start-2 row-start-1 row-end-3 drop-shadow-2xl flex justify-center items-center text-center font-bold text-7xl bg-white">
                나 못해<br></br>
                컴포넌트몰라
              </div>
              {/*<CalendarWrap />*/}
            </div>
            <Carousel
              options={{
                align: "center",
                loop: true,
                skipSnaps: false,
                inViewThreshold: 0.7,
              }}
              slides={[
                <>
                  <div className="h-[40vh] w-[80vw] bg-[#5C469C] relative flex justify-around rounded-[12.2px]">
                    <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                      <div className="banner_txt_container">
                        <p>
                          <strong className="text-[2.2em] text-[white]">
                            2024년 스팸 커리큘럼
                          </strong>
                        </p>
                        <strong className="text-2xl text-[white]">
                          하나부터 열까지 배우는 쉬운 과정!
                        </strong>
                      </div>
                    </div>
                    <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                      <Image
                        className="relative w-[35vw]"
                        src="/images/배너1.png"
                        alt="배너1"
                        width={756}
                        height={419}
                      />
                    </div>
                  </div>
                </>,
                <>
                  <div className="h-[40vh] w-[80vw] bg-[#86B6F6] relative flex justify-around rounded-[12.2px]">
                    <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                      <div className="banner_txt_container">
                        <p>
                          <strong className="text-[2.2em] text-[white]">
                            2024년 스팸 프론트 커리큘럼
                          </strong>
                        </p>
                        <strong className="text-2xl text-[white]">
                          프론트 엔드 개발자의 한 걸음!
                        </strong>
                      </div>
                    </div>
                    <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                      <Image
                        className="relative w-[35vw]"
                        src="/images/배너1.png"
                        alt="배너1"
                        width={756}
                        height={419}
                      />
                    </div>
                  </div>
                </>,
                <>
                  <div className="h-[40vh] w-[80vw] bg-[#1D267D] relative flex justify-around rounded-[12.2px]">
                    <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                      <div className="banner_txt_container">
                        <p>
                          <strong className="text-[2.2em] text-[white]">
                            2024년 스팸 백엔드 커리큘럼
                          </strong>
                        </p>
                        <strong className="text-2xl text-[white]">
                          백엔드 고수가 되는 과정!
                        </strong>
                      </div>
                    </div>
                    <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                      <Image
                        className="relative w-[35vw]"
                        src="/images/배너1.png"
                        alt="배너1"
                        width={756}
                        height={419}
                      />
                    </div>
                  </div>
                </>,
                <>
                  <div className="h-[40vh] w-[80vw] bg-[#A674D8] relative flex justify-around rounded-[12.2px]">
                    <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                      <div className="banner_txt_container">
                        <p>
                          <strong className="text-[2.2em] text-[white]">
                            2024년 스팸 디자인 커리큘럼
                          </strong>
                        </p>
                        <strong className="text-2xl text-[white]">
                          세계 최고의 디자이너가 되어라
                        </strong>
                      </div>
                    </div>
                    <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                      <Image
                        className="relative w-[35vw]"
                        src="/images/배너1.png"
                        alt="배너1"
                        width={756}
                        height={419}
                      />
                    </div>
                  </div>
                </>,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
