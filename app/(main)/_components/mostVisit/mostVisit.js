import React from 'react';
import Title from "../title/title";
import BlogBox from "../blog/blogBox";

const MostVisit = () => {
  return (
    <>
      <Title title={"بیشترین بازدید"}/>
      <div className={"grid grid-cols-1 md:grid-cols-3 justify-between gap-3"}>
        <BlogBox size={"small"}  link={"news/test1"}/>
        <BlogBox size={"small"} link={"news/test1"}/>
        <BlogBox size={"small"} link={"news/test1"}/>
      </div>
    </>
  );
};

export default MostVisit;
