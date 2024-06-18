import cat_gif from "@images/about/mongo.gif";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full flex flex-col md:gap-4 px-10" id="about">
      <h1 className=" font-sanctuary text-white md:text-[120px] text-[52px] text-center">
        About
      </h1>
      <div className="flex flex-row gap-3">
        <div className="flex-1 font-crotah text-cyan-500 flex justify-center flex-col text-center">
          <div className="text-[20px] md:text-[28px]">The Bongo Cat</div>
          <p className=" text-red-400 text-[11px] md:text-[20px] md:leading-[24px]">
            bongo cat is musician.
            <br />
            bongo cat is developer. <br />
            bongo cat is astronaut. <br />
            bongo cat can punch any cat in the world.
            <br />
            bongo cat can do anything better than you!!!!!
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="md:w-[450px] rounded-lg overflow-hidden">
            <Image src={cat_gif} alt="cat" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
