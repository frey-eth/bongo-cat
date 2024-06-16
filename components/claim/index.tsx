import icon_clock from "@icons/clock.svg";
import Image from "next/image";
import ButtonClaim from "../commons/buttons/button-claim";
const ClaimAirdrop = () => {
  return (
    <div className="w-full md:max-w-[800px] border-2 border-blue-600 rounded-lg p-8 bg-[#1a1d2c] -mt-20 flex flex-col gap-4 font-crotah">
      <div className="text-center  flex gap-4 flex-col">
        <h3 className="text-[28px] text-cyan-500">Claim Your Airdrop</h3>
        <p className="text-white font-light">
          A total of 21,000,000,000,000 tokens are now available to be claimed
          by those who have claimed the ZKSync airdrop. $BONGO tokens that have
          not been claimed within 31 days will be used for the Community
          Long-Term Incentive Reward Program. The $BONGO will be distributed to
          the top contributors of ZKsync community and burned.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-center">
          <div className=" text-emerald-500 bg-black rounded-lg px-3 py-2 flex flex-row items-center gap-2">
            <Image src={icon_clock} alt="clock" width={20} height={20} />
            2024.06.17 09:00(UTC+0) - 2024.07.18 09:00(UTC+0)
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex flex-row justify-between text-white opacity-70">
            <p>Received</p>
            <p>21000B</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            />
          </div>

          <input
            type="text"
            disabled
            placeholder="123456789000"
            className="rounded-lg px-4 py-2 bg-transparent border-[3px] border-fuchsia-700 placeholder:text-white"
          />
        </div>
        <ButtonClaim />
      </div>
    </div>
  );
};

export default ClaimAirdrop;
