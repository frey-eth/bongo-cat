import { useMemo } from "react";
import { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import AIRDROP_ABI from "../contracts/AIRDROP_ABI.json";
export function useClaim() {
  const { address } = useAccount();
  const {
    writeContractAsync,
    data: tx_hash,
    isSuccess,
    isPending,
  } = useWriteContract();

  const claim = async ({ ref_address }: { ref_address?: Address }) => {
    if (process.env.NEXT_PUBLIC_CLAIM_ADDRESS == undefined) {
      return;
    }

    if (ref_address) {
      try {
        await writeContractAsync({
          abi: AIRDROP_ABI,
          address: process.env.NEXT_PUBLIC_CLAIM_ADDRESS as Address,
          functionName: "claim",
          args: [ref_address],
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await writeContractAsync({
          abi: AIRDROP_ABI,
          address: process.env.NEXT_PUBLIC_CLAIM_ADDRESS as Address,
          functionName: "claim",
          args: [],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return useMemo(() => {
    return { tx_hash, claim, isPending, isSuccess };
  }, [claim, tx_hash, address]);
}
