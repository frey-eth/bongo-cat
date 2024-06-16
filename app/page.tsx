import Banner from "@/components/banner";
import ClaimAirdrop from "@/components/claim";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Tokenomics from "@/components/tokenomic";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-[#1a1d2c] flex-col md:gap-10 gap-3">
      <Header />
      <Banner />
      <ClaimAirdrop />
      <Tokenomics />
      <Footer />
    </main>
  );
}
