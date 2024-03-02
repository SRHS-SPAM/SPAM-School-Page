import Link from "next/link";
import LoginForm from "./_components/loginForm";

export default function login() {
  return (
    <>
      <div className="px-[150px] py-[58px] bg-white rounded-[20px] flex-col justify-start items-center gap-[30px] inline-flex">
        <img className="w-[295px] h-[130px]" src="/images/로고.png" />
        <LoginForm />
        <div className="w-[500px] justify-between items-center inline-flex">
          <div className="w-[130px] h-6 text-center text-amber-300 text-xl font-semibold font-body tracking-widest">
            아이디 찾기
          </div>
          <div className="w-[130px] h-6 text-center text-amber-300 text-xl font-semibold font-body tracking-widest whitespace-nowrap">
            비밀번호 찾기
          </div>
          <Link
            href={"/signup"}
            className="w-[130px] h-6 text-center text-amber-300 text-xl font-semibold font-body tracking-widest"
          >
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
}
