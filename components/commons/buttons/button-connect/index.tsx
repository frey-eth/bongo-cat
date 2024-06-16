"use client";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const ButtonConnect = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();

  return (
    <button onClick={() => open()} className="py-2 px-3 rounded bg-orange-500 text-black">
      {address
        ? `${address.slice(0, 4)}...${address.slice(
            address.length - 4,
            address.length
          )}`
        : "Connect Wallet"}
    </button>
  );
};

export default ButtonConnect;
