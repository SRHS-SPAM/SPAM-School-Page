"use client";

import Link from "next/link";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import { Input } from "../_components/input";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const onClick: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      console.log("asdasd");
      const response = await fetch("/backend/auth/verify", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      })
        .then((r) => r.json())
        .then((r) => console.log(r))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const target = e.currentTarget;

    const body = {
      email: target.email.value,
      password: target.passward.value,
      name: target.nickName.value,
      grade: parseInt(target.grade.value),
      class: parseInt(target.class.value),
      number: parseInt(target.number.value),
    };

    console.log(body);

    try {
      await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="px-[100px] py-[58px] bg-white rounded-[20px] flex-col justify-start items-center gap-[50px] inline-flex"
      >
        <img className="w-[295px] h-[130px]" src="/images/로고.png" />
        <div className="flex-col justify-center items-center gap-10 flex">
          <div className="flex-col justify-center items-center gap-5 flex">
            <Input required placeholder="닉네임" type={"text"} id="nickName" />
            <div className="w-full justify-between items-center flex gap-4">
              <Input
                required
                placeholder="이메일"
                type={"email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
              />
              <button
                type="button"
                onClick={onClick}
                className="h-[65px] border border-black border-opacity-50 rounded-md text-[15px] whitespace-nowrap px-3 font-semibold font-body"
              >
                인증번호 받기
              </button>
            </div>
            <Input required placeholder="인증번호" type={"text"} id="code" />

            <Input
              required
              placeholder="비밀번호"
              type={"password"}
              id="passward"
            />

            <Input
              required
              placeholder="비밀번호 확인"
              type={"password"}
              id="passward_check"
            />

            <div className="w-[500px] h-[84.16px] flex gap-2.5">
              <Input required placeholder="학년" type={"text"} id="grade" />

              <Input required placeholder="반" type={"text"} id="class" />

              <Input required placeholder="번호" type={"text"} id="number" />
            </div>
          </div>
          <div className="text-center">
            <span className="text-black text-opacity-50 text-xl font-semibold font-body tracking-widest">
              계정이 있으신가요?&nbsp;
            </span>
            <Link
              href={"/login"}
              className="text-amber-300 text-xl font-semibold font-body tracking-widest"
            >
              로그인
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-[500px] py-5 rounded-lg justify-center items-center gap-2.5 flex bg-amber-300"
        >
          <div className="text-center text-black text-2xl font-semibold font-body tracking-widest">
            가입
          </div>
        </button>
      </form>
    </>
  );
};

export default SignUp;
