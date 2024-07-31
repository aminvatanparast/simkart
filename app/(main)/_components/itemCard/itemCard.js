import React from 'react';
import Tabs from "../../_core/components/tabs/tabs";
import Singleitem from "./singleitem/singleitem";
import SingleItemNumber from "./singleItemNumber/singleItemNumber";
import BlogBox from "../blog/blogBox";

const ItemCard = ({type}) => {

  const handleTypeBox = (color) => {
    switch (type) {
      case "number": {
         return  <SingleItemNumber color={color}/>
      }
      case "details": {
        return  <Singleitem color={color}/>
      }
      default : break;
    }
  }


  return (
    <div>
      <Tabs title={"فروشندگان ویژه"}/>
      <div className=" w-full bg-white border border-gray-200 rounded-lg shadow  p-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 ">
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-primary-500")}
        {handleTypeBox("bg-main")}
        {handleTypeBox("bg-secondary-900")}
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-orange-500")}
        {handleTypeBox("bg-orange-500")}
      </div>
    </div>
  );
};

export default ItemCard;
