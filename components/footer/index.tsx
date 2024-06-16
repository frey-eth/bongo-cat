import Image from "next/image";
import bongo_logo from "@images/footer/bongo-logo.jpg";
const Footer = () => {
  return (
    <div className="w-full p-4 shadow-xl">
      <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="px-10 py-5 rounded-lg w-full bg-[#1a1d2c] border-white/20 text-white font-crotah flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-[28px] flex flex-row items-center gap-2">
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
          <p className="text-center font-sanctuary">
            ©{new Date().getFullYear()} by BONGO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
