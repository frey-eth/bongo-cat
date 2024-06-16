import logo_gif from "@images/header/logo.gif";
import Image from "next/image";
import Link from "next/link";
import ButtonConnect from "../commons/buttons/button-connect";
import BongoDo from "./bongo-do";
import MenuDropdown from "./menu-dropdown";

const Header = () => {
  return (
    <>
      <div className="w-full px-10 py-8 fixed z-[100] hidden md:block">
        <div className="px-20 py-4 flex flex-row items-center justify-between h-fit w-full font-crotah border-[2px] rounded-lg shadow-lg backdrop-blur">
          <div className="flex flex-row rounded-md justify-between items-center p-2 h-fit bg-black text-white">
            <Link
              href={"/"}
              className="flex flex-row items-center gap-3 text-[28px] "
            >
              <div className="h-[56px] w-[56px] rounded overflow-hidden">
                <Image src={logo_gif} alt="logo" />
              </div>
              Bongo Cat
            </Link>
          </div>
          <div className="flex flex-row items-center gap-10 text-[20px] text-white">
            <Link href="/#about">About</Link>
            <Link href="/#tokenomics">Tokenomics</Link>
            <Link href="/#buy">How to buy</Link>
            <ButtonConnect />
          </div>
        </div>
        <div className="flex w-full justify-end mt-3">
          <BongoDo />
        </div>
      </div>
      <div className="md:hidden w-full px-3 py-2 fixed font-crotah  z-[100]">
        <div className="w-full py-2 px-4 border border-cyan-600 rounded-md flex flex-row justify-between items-center bg-[#1a1d2c]">
          <div className="flex flex-row rounded-md justify-between items-center p-2 h-fit w-fit bg-black text-white">
            <Link
              href={"/"}
              className="flex flex-row items-center gap-3 text-[18px] "
            >
              <div className="h-[32px] w-[32px] rounded overflow-hidden">
                <Image src={logo_gif} alt="logo" />
              </div>
              Bongo Cat
            </Link>
          </div>
          <MenuDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
