import HomeCardSection from "@/components/Home/HomeCardSection";
import { singleBlogDetail } from "@/utils/blogData";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

type TParams = {
  params: {
    blogId: string;
  };
};

const BlogDetails = ({ params }: TParams) => {
  const singleBlog = singleBlogDetail(params.blogId);

  return (
    <div className="bg-[#0b0022]">
      <div className="w-full max-w-[1200px] mx-auto pt-10 ">
        <div className="flex flex-col md:flex-row lg:flex-row gap-20 px-2 md:px-4 lg:px-0">
          <div>
            <h1 className="text-white font-bold text-3xl">
              {singleBlog?.title}
            </h1>
            <div className="mt-6 flex items-center gap-40">
              <h1 className="inline-flex items-center gap-3 font-semibold text-white">
                <Calendar /> {singleBlog?.date}
              </h1>
              <h1 className="font-semibold text-white">Category: Technology</h1>
            </div>
            <div className="mt-16">
              <p className="font-semibold text-gray-400">
                {singleBlog?.description}
              </p>
              <div className="mt-10">
                {singleBlog?.blogDescription &&
                  singleBlog?.blogDescription.map((detail, index) => (
                    <div key={index}>
                      <div>
                        <h1 className="text-gray-300 font-semibold text-xl mt-9">
                          {detail.title}
                        </h1>
                        <p className="text-gray-400 mt-4">{detail.details}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 lg:w-[400px] h-[253px] shrink-0 p-[2px]  mt-4 rounded-lg">
            <div className="bg-[#0b0022] p-[16px] rounded-lg">
              <h1 className="text-xl font-bold text-white ">Popular Tag</h1>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <h1 className="bg-purple-700 text-white px-4 py-3 rounded-lg">
                  ArtificialIntiligen
                </h1>
                <h1 className="bg-purple-700 text-white px-4 py-3 rounded-lg">
                  WebDevelopment
                </h1>
                <h1 className="bg-purple-700 text-white px-4 py-3 rounded-lg">
                  MachineLearning
                </h1>
                <h1 className="bg-purple-700 text-white px-4 py-3 rounded-lg">
                  CloudComputing
                </h1>
                <h1 className="bg-purple-700 text-white px-4 py-3 rounded-lg">
                  Cybersecurity
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-8 md:justify-between items-center mt-28 mb-4 px-2 md:px-2 lg:px-0">
            <h1 className="  text-3xl font-bold text-white">Similar Posts</h1>
            <Link href="/">
              <h1 className=" text-xl font-semibold text-white inline-flex items-center md:translate-y-4">
                See All <ChevronRight />
              </h1>
            </Link>
          </div>
          <HomeCardSection />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
