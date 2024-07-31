import React from 'react';
import TabItem from "../tabItem/tabItem";
const Tabs = ({title}) => {
  return (
    <div className={"flex self-end"}>
      {
        title &&
        <h3 className={'flex items-center ml-3 font-bold'}>
          {title || "شماره های رند"}

        </h3>
      }

      <ul
        className="flex flex-wrap text-sm font-medium text-center text-white dark:border-gray-700 dark:text-gray-400">
        <li className="me-2 border-b-4 border-orange-500">
          <a href="#" aria-current="page"
             className="inline-block p-4  bg-primary-500 rounded-t-2xl active dark:bg-gray-800 dark:text-blue-500">سیم کارت</a>
        </li>
        <li className="me-2">
          <a href="#"
             className="inline-block border-b-4 border-orange-500 p-4 rounded-t-2xl bg-gray-200 text-primary-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">تلفن ثابت</a>
        </li>
        <li className="me-2">
          <a href="#"
             className="inline-block border-b-4 border-orange-500 p-4 rounded-t-2xl bg-gray-200 text-primary-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">دامنه</a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
