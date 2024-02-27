import LoginForm from "./_components/loginForm";

export default function login() {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="w-[70%] h-full flex flex-col items-center justify-center bg-[rgb(40,44,52)]">
          <div className="w-[95%] h-[40rem] bg-[#1a1a1a] rounded-md">
            <h1 className="text-[2rem] mt-4 mx-[1.3rem] font-bold tracking-[2px] leading-[1em] text-center mb-10 text-white">
              Seoul Robotics
              <br />
              <em>Highschool</em>
            </h1>
            <div className="">
              {/* <LoginForm /> */}
              <div className="">
                <div className="">
                  {/* {another.map((name, i) => (
                    <AnotherLogin name={name} key={i}></AnotherLogin>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
