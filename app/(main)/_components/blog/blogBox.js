import React from 'react';
import Link from "next/link";

const BlogBox = ({size , link , image = true}) => {
  return (
    <Link href={`${link}`}>
      {
        size === "small" ?
          <div href="#"
               className="flex flex-col p-4 gap-5 items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-500 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {
              image &&
              <img className="object-cover w-full rounded-lg h-20  md:w-20  "
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                   alt=""/>
            }

            <div className="flex flex-col justify-between  leading-normal">
              <div>
                <h5 className="mb-2 text-md font-bold tracking-tight  dark:text-white">
                  غو و استعلام مانده بسته‌های اینترنتی استفاده می‌کنند
                </h5>
              </div>
              <div className={"flex justify-between"}>
                <span className={"text-sm text-gray-400 "}>دانستی ها</span>
                <span className={"text-sm text-gray-400 "}>20/2/1938</span>
              </div>
            </div>
          </div>
          :
          <div href="#"
               className="flex  p-4 items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-500 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-lg h-96 h-auto  w-24 md:h-auto md:w-48  "
                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                 alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div>
                <h5 className="mb-2 text-md font-bold tracking-tight  dark:text-white">
                  غو و استعلام مانده بسته‌های اینترنتی استفاده می‌کنند
                </h5>
              </div>
              <div className={"flex justify-between"}>
                <span className={"text-sm text-gray-400 "}>دانستی ها</span>
                <span className={"text-sm text-gray-400 "}>20/2/1938</span>
              </div>
            </div>
          </div>
      }
    </Link>
  );
};

export default BlogBox;
