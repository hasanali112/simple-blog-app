"use client";

import { AllBlogData } from "@/utils/blogData";
import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export type TBlog = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

const HomeCardSection = () => {
  const [blogNumber, setBlogNumber] = useState<number>(6);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const allBlog = AllBlogData();

  const handleRight = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setBlogNumber(12);
      setIsTransitioning(false);
    }, 300);
  };

  const handleLeft = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setBlogNumber(6);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="pb-20 px-4 md:mx-2 lg:mx-0">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6 relative z-20 transition-opacity duration-500 ${
          isTransitioning ? "opacity-25" : "opacity-100"
        }`}
      >
        {allBlog
          .slice(blogNumber === 6 ? 0 : 6, blogNumber)
          .map((blog: TBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
      </div>
      <div className="flex justify-center gap-4 items-center mt-10">
        <ChevronLeft onClick={handleLeft} className="w-6 cursor-pointer" />
        {allBlog.slice(0, 6).map((_, index: number) => (
          <div key={index}>
            <div className="w-[10px] h-[10px] rounded-full bg-white" />
          </div>
        ))}
        <ChevronRight onClick={handleRight} className="w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default HomeCardSection;
