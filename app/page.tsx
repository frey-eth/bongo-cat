import Banner from "@/components/banner";
import ClaimAirdrop from "@/components/claim";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-[#1a1d2c] flex-col">
      <Header />
      <Banner />
      <ClaimAirdrop />
    </main>
  );
}
