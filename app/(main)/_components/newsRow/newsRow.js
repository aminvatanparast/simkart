import React from 'react';
import BlogBox from "../blog/blogBox";
import Tabs from "../../_core/components/tabs/tabs";

const NewsRow = ({title}) => {
  return (
    <div className={"mt-10 mb-5 "}>
      <Tabs title={title}/>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow  p-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8">
       <BlogBox size={"small"}  link={"news/test1"}/>
       <BlogBox size={"small"} link={"news/test1"}/>
       <BlogBox size={"small"} link={"news/test1"}/>
       <BlogBox size={"small"} link={"news/test1"}/>
       <BlogBox size={"small"} link={"news/test1"}/>
       <BlogBox size={"small"} link={"news/test1"}/>
      </div>
    </div>
  );
};

export default NewsRow;
