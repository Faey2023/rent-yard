import Image from "next/image";
import { Button } from "../ui/button";
import logo from "@/app/assets/logo.png";
const Nav = () => {
  return (
    <nav className="flex justify-between p-5 border-b border-[#eoeoeo] md:px-10">
      <Image src={logo} width={150} height={40} alt="logo" />
      <Button variant={"ghost"}>Exit</Button>
    </nav>
  );
};

export default Nav;
