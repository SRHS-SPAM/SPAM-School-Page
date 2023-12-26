import { Bell, UserRound } from "lucide-react";
import Image from "next/image";
import Menu from "./menu";

const NavList = [
  <Bell key={1} size={28} />,
  <UserRound key={2} size={28} />,
  <Menu key={3} />,
];

const Navbar = () => {
  return (
    <div className="z-50 fixed flex justify-between w-full border-b shadow-sm top-0 p-6">
      <Image src={"/images/logo.png"} height={100} width={200} alt="Logo" />
      <div className="flex items-center gap-6">
        {NavList.map((arg, i) => (
          <div
            className="bg-[#E5D283] w-14 h-14 flex items-center justify-center rounded-[50%]"
            key={i}
          >
            {arg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
