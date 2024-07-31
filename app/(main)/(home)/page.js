"use client"
import React, {useEffect} from 'react';
import SimKartList from "../_components/SimKartList/SimKartList";
import {initFlowbite} from "flowbite";
import GitftLine from "../_components/giftLine/gitftLine";
import ItemCard from "../_components/itemCard/itemCard";
import Blog from "../_components/blog/blog";

const Page = () => {

  useEffect(() => {
    initFlowbite()
  } , [])
  return (
    <div className={"container mx-auto"}>
      <GitftLine/>
      <SimKartList/>
      <GitftLine/>
      <ItemCard type={"details"}/>
      <GitftLine/>
      <ItemCard type={"number"}/>
      <GitftLine/>
      <Blog/>
    </div>
  );
};

export default Page;
