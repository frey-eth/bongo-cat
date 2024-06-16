const Banner = () => {
  return (
    <div className='h-[100vh] w-full bg-[url("/images/airdrop/bg.png")] bg-cover flex items-center justify-center'>
      <div className="flex flex-col leading-[40px] font-crotah text-[28px] text-blue-600 text-center py-3 px-6 backdrop-blur rounded-xl">
        Proudly Launch on ZKsync
        <p className="text-[40px] text-white">Meow Meow Can Do Everything</p>
      </div>
    </div>
  );
};

export default Banner;
