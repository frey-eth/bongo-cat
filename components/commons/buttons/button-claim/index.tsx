"use client";
import { useClaim } from "@/hooks/useClaim";

const ButtonClaim = () => {
    const { claim } = useClaim();

    return (
        <button
            onClick={() => {
                claim();
            }}
            className={`px-3 py-2 bg-[url("/icons/button.svg")] w-[120px] flex items-center justify-center bg-cover self-center text-black hover:text-teal-600 font-crotah`}
        >
            Mint
        </button>
    );
};
export default ButtonClaim;
