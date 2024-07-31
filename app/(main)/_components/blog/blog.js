import React from 'react';
import BlogBox from "./blogBox";

const Blog = () => {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:grid-flow-col gap-y-4 md:gap-4 justify-between  "}>
      <div className="col-span-2 bg-white border border-gray-200 rounded-lg shadow  p-4 max-h-[600px]">
        <figure
          className="relative w-full h-full transition-all duration-300 cursor-pointer filter  hover:grayscale">
          <a href="#">
            <img className=" w-full h-full rounded-lg"
                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                 alt="image description"/>
          </a>
          <figcaption className="absolute w-[calc(100%-5rem)] p-4 text-xl font-bold text-black bottom-6 bg-white/70 mx-10 rounded-lg">
            <p>محیطی امن و آسان برای خرید و فروش سیم‌کارت و تلفن‌ثابت راه‌اندازی شد</p>
          </figcaption>
        </figure>
      </div>
      <div className={"grid grid-cols-1 gap-2 justify-between"}>
        <BlogBox link={"news"}/>
        <BlogBox link={"news"}/>
        <BlogBox link={"news"}/>
      </div>
    </div>
  );
};

export default Blog;
