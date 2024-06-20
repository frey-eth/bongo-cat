"use client";
import { useClaim } from "@/hooks/useClaim";
import { useSearchParams } from "next/navigation";
import { Address } from "viem";

const ButtonClaim = () => {
  const { tx_hash, claim, isPending, isSuccess } = useClaim();
  const searchParams = useSearchParams();
  const ref_address = searchParams.get("ref");

  const handleClaim = async () => {
    if (ref_address) {
      await claim({ ref_address: ref_address as Address });
    } else {
      await claim({});
    }
  };

  return (
    <button
      onClick={handleClaim}
      className={`px-3 py-2 bg-[url("/icons/button.svg")] w-[120px] flex items-center justify-center bg-cover self-center text-black hover:text-teal-600 font-crotah`}
    >
      Claim
    </button>
  );
};
export default ButtonClaim;
