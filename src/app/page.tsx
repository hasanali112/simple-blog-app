import globe from "@/assets/hero1.png"; // Adjust the path as necessary
import HomeCardSection from "@/components/Home/HomeCardSection";
import SearchBar from "@/components/Home/SearchBar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-[#0b0022]   text-white relative">
      <div>
        <Image
          src={globe}
          alt="globe"
          height={500}
          width={500}
          className="opacity-5 w-[100%] h-[500px] md:h-[1200px] lg:h-[1200px] mx-auto absolute top-0 left-0"
        />
      </div>
      <div className="w-full max-w-[1200px] mx-auto pt-16">
        <h1 className="text-center text-4xl font-bold text-purple-400">
          Beyondo<span className="text-purple-300">tc</span>{" "}
          <span className="text-purple-300">News</span>
        </h1>
        <div className=" w-[150px] h-[6px] mx-auto mt-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-300"></div>
        <p className="text-xl text-purple-200 text-center mt-4">
          Beyong OTC, seamlessly connecting a diverse range of investors and
          founders
        </p>
        <SearchBar />
        <HomeCardSection />
      </div>
    </div>
  );
};

export default Home;
