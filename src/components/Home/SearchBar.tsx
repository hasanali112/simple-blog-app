import { ChevronDown, Filter } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center relative">
      <input
        readOnly
        type="text"
        className="lg:w-[550px] md:w-[540px] w-[93%] h-[120px] md:h-[70px] rounded-lg mt-8 relative z-20 focus:outline-none text-black cursor-pointer"
      />

      <div className="hidden md:block">
        <div className="absolute top-[45px] md:left-[42%] lg:left-[50%] md:translate-x-[-32%] lg:translate-x-[-50%] text-gray-500 z-30">
          <div className="flex gap-6 items-center">
            <button className="flex gap-2 font-semibold">
              Select Category
              <span className="mt-1">
                <ChevronDown className="w-5" />
              </span>
            </button>
            <div className="w-[45px] h-[1px] bg-gray-500 rotate-90"></div>
            <button className="flex gap-2 font-semibold">
              Select Tag
              <span className="mt-1">
                <ChevronDown className="w-5" />
              </span>
            </button>
            <button className="flex justify-center items-center gap-2 bg-[#5618cd] text-white font-semibold w-[100px] h-[45px] rounded-lg">
              Filter
              <span className="mt-1">
                <Filter className="w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="absolute top-[45px] left-[10%]  text-gray-500 z-30">
          <div className="grid grid-cols-2 gap-5 items-center">
            <button className="flex gap-2 font-semibold">
              Select Category
              <span className="mt-1">
                <ChevronDown className="w-5" />
              </span>
            </button>

            <button className="flex gap-2 font-semibold">
              Select Tag
              <span className="mt-1">
                <ChevronDown className="w-5" />
              </span>
            </button>
            <button className="flex justify-center items-center gap-2 bg-[#5618cd] text-white font-semibold w-[250px] h-[45px] rounded-lg ml-4">
              Filter
              <span className="mt-1">
                <Filter className="w-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
