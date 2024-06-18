import About from "@/components/about";
import Banner from "@/components/banner";
import ClaimAirdrop from "@/components/claim";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SocialNetwork from "@/components/social";
import Tokenomics from "@/components/tokenomic";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-[#1a1d2c] flex-col md:gap-10 gap-3">
      <Header />
      <Banner />
      <ClaimAirdrop />
      <div className="text-decoration-none">
        <h1 className="connect-footer my-5 text-white text-center p-5 font-bold text-[60px] md:text-[200px] font-sanctuary uppercase relative">
          Launch On ZKsync
        </h1>
      </div>
      <SocialNetwork />
      <About />
      <Tokenomics />
      <Footer />
    </main>
  );
}
