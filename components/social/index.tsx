"use client";
import coingecko from "@icons/socials/coingecko.svg";
import coinmarkercap from "@icons/socials/coinmarkercap.svg";
import dex from "@icons/socials/dexscan.svg";
import eagle from "@icons/socials/eagle.svg";
import tele from "@icons/socials/tele.svg";
import X from "@icons/socials/x.svg";
import Background from "@icons/socials/bg.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee";
const social_list = [
  {
    icon: X,
    url: "https://x.com/ZkBongo",
    text: "X",
  },
  {
    icon: tele,
    url: "https://t.me/BongoZk",
    text: "Telegram",
  },
  {
    icon: coingecko,
    url: "https://www.coingecko.com/",
    text: "Coingecko",
  },
  {
    icon: coinmarkercap,
    url: "https://coinmarketcap.com/",
    text: "Coinmarketcap",
  },
  {
    icon: eagle,
    url: "https://dexscreener.com/",
    text: "Dexscreener",
  },
  {
    icon: dex,
    url: "dextools.io/",
    text: "Dextool",
  },
];
export default function SocialNetwork() {
  const [textMarquee, setTextMarquee] = useState<string>("");
  return (
    <div
      id="tokenomics"
      className="flex w-full items-center justify-center gap-[40px] overflow-hidden bg-white/30 py-4 max-sm:gap-3 max-sm:p-4"
    >
      <div className="absolute h-full w-full overflow-hidden">
        <Image src={Background} fill alt="bg" />
      </div>
      <div className="absolute z-[2] max-w-full overflow-hidden">
        <Marquee direction="right" autoFill={true} speed={200}>
          <div className="z-[1] mx-40 flex font-sanctuary items-center gap-4 text-[40px] font-bold text-[#000000] text-opacity-30 mix-blend-soft-light	">
            {textMarquee}
          </div>
        </Marquee>
      </div>
      {social_list.map((item, index: number) => {
        return (
          <Link
            style={{
              border: "1px solid #211919",
              boxShadow: "4px 4px 0px 0px #3A452A",
            }}
            key={index}
            href={item.url}
            target="_blank"
            onMouseEnter={() => setTextMarquee(item.text)} // Set hovered text when mouse enters
            onMouseLeave={() => setTextMarquee("")} // Clear hovered text when mouse leaves
            className="z-[3] flex items-center justify-center rounded-full bg-fuchsia-200 p-4 max-sm:p-3"
          >
            <Image
              src={item.icon}
              alt={`partner-${index}`}
              className=" rounded-full"
            />
          </Link>
        );
      })}
    </div>
  );
}
