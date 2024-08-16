"use client";
import About from "@/components/about";
import Banner from "@/components/banner";
import ClaimAirdrop from "@/components/claim";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SocialNetwork from "@/components/social";
import Tokenomics from "@/components/tokenomic";
// import { createRandomWallet } from "@/utils/random-wallet";
// import { useEffect } from "react";
// import toast from "react-hot-toast";
// import bongo_logo from "@images/footer/bongo-logo.jpg";
// import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   setInterval(() => {
  //     const walletAddress = createRandomWallet();
  //     toast.custom((t) => (
  //       <div
  //         className={`${
  //           t.visible ? "animate-enter" : "animate-leave"
  //         } max-w-md w-full  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 bg-white`}
  //       >
  //         <div className="flex-1 w-0 p-4">
  //           <div className="flex items-start">
  //             <div className="flex-shrink-0 pt-0.5">
  //               <Image
  //                 className="h-10 w-10 rounded-full"
  //                 src={bongo_logo}
  //                 alt="logo"
  //               />
  //             </div>
  //             <div className="ml-3 flex-1">
  //               <p className="text-sm font-medium text-gray-900 font-crotah tracking-wide">
  //                 {walletAddress.address.slice(0, 5)}...
  //                 {walletAddress.address.slice(-7)}
  //               </p>
  //               <p className="mt-1 text-sm text-gray-500 font-crotah">
  //                 Has viewed $BONGO website
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="flex border-l border-gray-200">
  //           <button
  //             onClick={() => toast.dismiss(t.id)}
  //             className="w-full font-sanctuary border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-black hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  //           >
  //             X
  //           </button>
  //         </div>
  //       </div>
  //     ));
  //   }, 5000);
  // }, []);

  return (
    <main className="flex min-h-screen items-center bg-[#1a1d2c] flex-col md:gap-10 gap-3">
      <Header />
      <Banner />
      {/* <ClaimAirdrop /> */}
      <div className="text-decoration-none">
        <h1 className="connect-footer my-5 text-white text-center p-5 font-bold text-[60px] md:text-[200px] font-sanctuary uppercase relative">
          Bongo On Solana
        </h1>
      </div>
      <SocialNetwork />
      <About />
      <Tokenomics />
      <Footer />
    </main>
  );
}
