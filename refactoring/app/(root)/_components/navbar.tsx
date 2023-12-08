import { Bell, Menu, UserRound } from "lucide-react";
import Image from "next/image";

const NavList = [
  <Bell key={1} size={28} />,
  <UserRound key={2} size={28} />,
  <Menu key={3} size={28} />,
];

const NavBar = () => {
  return (
    <div className="z-50 fixed flex justify-between w-full border-b shadow-sm top-0 p-6">
      <Image src={"/images/logo.png"} height={100} width={200} alt="Logo" />
      <div className="flex items-center gap-6">
        {NavList.map((arg, i) => (
          <div
            className="bg-[#E5D283] w-[55px] h-[55px] flex items-center justify-center rounded-[50%]"
            key={i}
          >
            {arg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
