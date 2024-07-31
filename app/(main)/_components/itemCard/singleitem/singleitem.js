import React from 'react';
import {VipIcon} from "../../icons/icons";

const Singleitem = ({color = "bg-orange-500"}) => {
  return (


    <div
      className=" max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className={`mb-1 text-center ${color} text-white rounded-t-lg text-md font-medium p-4 dark:text-gray-400`}>پیشخوان دولت عطایی</h5>

      <ul role="list" className="space-y-1 my-3 px-4 flex flex-col  justify-center items-center">
        <li className="flex items-center">

          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
            <VipIcon/>
          </span>
        </li>
        <li className="flex items-center">

          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">خریدارسیمکارت912</span>
        </li>
        <li className="flex">

          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">بالاترین قیمت</span>
        </li>

        <li className="flex">

          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">*رند و معمولی*</span>
        </li>
        <li className="flex">

          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">*پرداخت فوری*</span>
        </li>

      </ul>
      <div className={"p-4 pt-1"}>
        <button type="button"
                className="text-white bg-orange-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          09330938099
        </button>
      </div>
    </div>

  );
};

export default Singleitem;
