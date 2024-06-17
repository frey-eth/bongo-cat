import Image from "next/image";
import bongo_gif from "@images/tokenomic/bongo.gif";
import DonutChart from "./donut-chart";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="w-full flex flex-col md:gap-4 px-10">
      <h1 className=" font-sanctuary text-white md:text-[120px] text-[52px] text-center">
        TOKENOMICS
      </h1>
      <div className="flex md:flex-row flex-col w-full gap-4 justify-between">
        <Image src={bongo_gif} alt="gif" objectFit="cover" />

        <div className="flex flex-col md:flex-row text-white flex-1">
          <div className="flex flex-col font-crotah text-start justify-center">
            <h2 className="font-bold text-[20px]">
              Bongo Cat{" "}
              <span className=" text-white text-opacity-50">$Bongo</span>
            </h2>
            <p className="font-bold text-[16px]">
              Total Supply{"  "}
              <span className=" text-white text-opacity-50 whitespace-nowrap">
                21,000,000,000,000
              </span>
            </p>
          </div>
          <div className="w-[400px] max-md:w-full">
            <DonutChart />
          </div>
        </div>
        <Image
          src={bongo_gif}
          alt="gif"
          objectFit="cover"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
