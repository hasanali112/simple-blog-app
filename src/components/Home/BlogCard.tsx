import Image from "next/image";
import { TBlog } from "./HomeCardSection";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-[100%] h-[420px] md:h-[400px] lg:h-[400px] bg-white rounded-xl text-black">
      <div className="relative">
        <Image
          src={blog.image}
          alt="blog-image"
          width={500}
          height={500}
          className="w-full h-[220px]  rounded-[10px] object-cover"
        />
        <div className="bg-black bg-opacity-30 absolute top-0 w-full h-[220px] rounded-[10px]"></div>
        <div className="absolute top-[10%] left-[3%]">
          <h1 className="text-[#22dd67] font-bold text-2xl">Beyond OTC</h1>
          <h1
            className={
              blog.id === 5 || blog.id === 6 || blog.id === 11 || blog.id === 12
                ? "text-right text-white font-bold text-xl w-[80%] translate-x-9 md:mt-16 mt-3"
                : "text-white font-bold text-xl w-[60%] md:mt-16 mt-3"
            }
          >
            <span
              className={
                blog.id === 5 || blog.id === 6
                  ? ""
                  : "text-[#22dd67] font-bold "
              }
            >
              {blog.title.slice(0, 4)}
            </span>
            {blog.title.slice(4, 50)}
          </h1>
        </div>
      </div>

      <div className="px-3 mt-4">
        <h1 className="text-2xl font-bold">{blog.title.slice(0, 20)}...</h1>
        <p className="text-gray-500 mt-2">{blog.description.slice(0, 80)}</p>
        <div className="flex justify-between items-center mt-4">
          <h1 className="inline-flex items-center gap-3 font-semibold">
            <Calendar /> {blog.date}
          </h1>
          <Link href={`/${blog.id}`}>
            <button className="flex justify-center items-center gap-2 bg-[#5618cd] text-white font-semibold w-[130px] h-[40px] rounded-lg ">
              Read More
              <span className="mt-1">
                <ChevronRight className="w-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
