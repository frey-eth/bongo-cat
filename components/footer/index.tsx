import Image from "next/image";
import bongo_logo from "@images/footer/bongo-logo.jpg";
const Footer = () => {
  return (
    <div className="w-full p-4 shadow-xl">
      <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="px-3 md:px-10 md:py-5 py-2 rounded-lg w-full bg-[#1a1d2c] border-white/20 text-white font-crotah flex flex-col gap-3 max-md:text-[14px]">
          <div className="flex flex-row   max-md:flex-col md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="text-[28px] max-md:text-[16px] whitespace-nowrap flex flex-row items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-md overflow-hidden">
                  <Image
                    src={bongo_logo}
                    alt="bongo"
                    objectFit="cover"
                    className=" hover:scale-110 transition-transform"
                  />
                </div>
                BONGO CAT
              </div>
            </div>
            Meow meow meow. Meow meow meowwww
          </div>
          <p className="text-center font-sanctuary whitespace-nowrap">
            ©{new Date().getFullYear()} by BONGO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
