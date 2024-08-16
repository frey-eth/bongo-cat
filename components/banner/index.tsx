const Banner = () => {
  return (
    <div className='md:h-[100vh] h-[80vh] w-full bg-[url("/images/airdrop/bg.png")] bg-cover max-md:bg-contain max-md:bg-no-repeat flex items-center justify-center max-md:mt-10'>
      <div className="p-2">
        <div className="flex flex-col md:leading-[40px] leading-[24px] font-crotah text-[16px] md:text-[28px] text-blue-600 text-center py-3 px-6 backdrop-blur rounded-xl">
          Launch on Solana
          <p className="md:text-[40px] text-[24px] text-white">
            Meow Meow Can Do Everything
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
