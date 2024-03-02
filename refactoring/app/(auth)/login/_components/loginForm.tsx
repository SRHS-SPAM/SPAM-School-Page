"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";
import { Input } from "../../_components/input";

const LoginForm = () => {
  const login: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "http://localhost:3000/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={login}
        className="flex-col justify-center items-start gap-[29px] flex"
      >
        <Input placeholder="이메일" type={"email"} id="email" />

        <Input placeholder="비밀번호" type={"password"} id="password" />

        <div className="justify-center items-center gap-[15px] flex">
          <Checkbox id="check" />
          <Label
            htmlFor="check"
            className="text-black text-opacity-50 text-[15px] font-semibold font-body tracking-wider"
          >
            로그인 정보 저장하기
          </Label>
        </div>
        <button className="w-[500px] py-5 rounded-lg justify-center items-center gap-2.5 flex bg-amber-300">
          <div className="text-center text-black text-2xl font-semibold font-body tracking-widest">
            가입
          </div>
        </button>
      </form>
    </>
  );
};

export default LoginForm;
