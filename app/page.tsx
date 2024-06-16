import Banner from "@/components/banner";
import ClaimAirdrop from "@/components/claim";
import Header from "@/components/header";
import Tokenomics from "@/components/tokenomic";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-[#1a1d2c] flex-col gap-10">
      <Header />
      <Banner />
      <ClaimAirdrop />
      <Tokenomics />
    </main>
  );
}
