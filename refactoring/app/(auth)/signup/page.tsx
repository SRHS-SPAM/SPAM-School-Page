"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import { Input } from "../_components/input";

const data = [
  { placeholder: "학년", id: "grade", items: [1, 2, 3] },
  { placeholder: "반", id: "class", items: [1, 2, 3, 4, 5, 6, 7, 8] },
  {
    placeholder: "번호",
    id: "number",
    items: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
];

const SignUp = () => {
  const { toast } = useToast();

  const [inputs, setInputs] = useState({
    grade: "",
    class: "",
    number: "",
  });

  const [email, setEmail] = useState("");
  const [code, setCode] = useState<{ message: number }>();

  const onClick: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      if (!/^[a-zA-Z0-9._-]+@sonline20\.sen\.go\.kr$/.test(email)) {
        toast({
          title: "이메일이 형식에 맞지 않습니다.",
          description: "학교 이메일만 가입 가능합니다.",
          variant: "destructive",
        });

        return;
      }

      const response = await fetch("/backend/auth/verify", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      })
        .then((r) => r.json())
        .then((res) => {
          console.log(res);
          setCode(res);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const target = e.currentTarget;

    if (
      !/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/.test(target.nickName.value)
    ) {
      toast({
        title: "이름이 형식에 맞지 않습니다.",
        description: "2~16글자 영어/한글/숫자",
        variant: "destructive",
      });
      return;
    }

    if (!code?.message) {
      toast({
        title: "인증코드를 받아주세요.",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(target.code.value) !== code?.message) {
      toast({
        title: "인증코드가 알 맞지 않습니다.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[a-zA-Z0-9._-]+@sonline20\.sen\.go\.kr$/.test(target.email.value)) {
      toast({
        title: "이메일이 형식에 맞지 않습니다.",
        description: "학교 이메일만 가입 가능합니다.",
        variant: "destructive",
      });

      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(target.passward.value)) {
      toast({
        title: "비밀번호가 형식에 맞지 않습니다.",
        description: "8~25자 영어/숫자",
        variant: "destructive",
      });
      return;
    }

    if (target.passward.value !== target.check.value) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
      });
      return;
    }

    if (!inputs.grade || !inputs.class || !inputs.number) {
      toast({
        title: "학년, 반, 번호를 선택해주세요.",
        variant: "destructive",
      });
      return;
    }

    const body = {
      email: target.email.value,
      password: target.passward.value,
      name: target.nickName.value,
      grade: parseInt(inputs.grade),
      class: parseInt(inputs.class),
      number: parseInt(inputs.number),
    };

    console.log(body);

    try {
      await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(body),
      }).catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="px-[50px] py-[58px] bg-white rounded-[20px] flex-col justify-start items-center gap-[50px] inline-flex"
      >
        <img className="w-[295px] h-[130px]" src="/images/로고.png" />
        <div className="w-full flex-col justify-center items-center gap-10 flex">
          <div className="w-full flex-col justify-center items-center gap-5 flex">
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
                className="h-[65px] border border-black border-opacity-50 rounded-md text-[15px] whitespace-nowrap px-6 text-base font-semibold font-body"
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
              id="check"
            />

            <div className="w-[600px] h-[84.16px] flex gap-2.5">
              {data.map((args, i) => (
                <Select
                  key={i}
                  onValueChange={(value) => {
                    setInputs({
                      ...inputs,
                      [args.id]: value,
                    });
                  }}
                >
                  <SelectTrigger className="w-full h-[65px] rounded-md border border-black border-opacity-50 bg-background px-6 py-2 text-xl font-semibold font-body text-opacity-50 placeholder:text-muted-foreground">
                    <SelectValue placeholder={args.placeholder} />
                  </SelectTrigger>
                  <SelectContent
                    id={args.id}
                    className="border border-black border-opacity-20"
                  >
                    {args.items.map((arg, j) => (
                      <SelectItem
                        className="font-medium font-body text-lg"
                        key={j}
                        value={arg.toString()}
                      >
                        {arg}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
          </div>
          <div className="text-center">
            <span className="text-black text-opacity-50 text-xl font-semibold font-body tracking-wide">
              계정이 있으신가요?&nbsp;
            </span>
            <Link
              href={"/login"}
              className="text-amber-300 text-xl font-semibold font-body"
            >
              로그인
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-[600px] py-5 rounded-lg justify-center items-center gap-2.5 flex bg-amber-300"
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
