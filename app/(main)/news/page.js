import React from 'react';
import GitftLine from "../_components/giftLine/gitftLine";
import SimKartList from "../_components/SimKartList/SimKartList";
import ItemCard from "../_components/itemCard/itemCard";
import Blog from "../_components/blog/blog";
import MostVisit from "../_components/mostVisit/mostVisit";
import NewsRow from "../_components/newsRow/newsRow";

const Page = () => {
  return (
    <div className={"container mx-auto"}>
      <GitftLine/>
      <Blog/>
      <GitftLine/>
      <MostVisit/>
      <NewsRow type={"news"}  title={"اخبار سیم کارت"}/>
      <GitftLine/>
      <NewsRow type={"news"} title={"اخبار تلفن ثابت"}/>
      <GitftLine/>
      <NewsRow type={"news"} title={"اخبار تلفن ثابت"}/>
      <GitftLine/>
    </div>
  );
};

export default Page;
