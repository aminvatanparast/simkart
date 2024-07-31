'use client'

import React, {useEffect} from 'react';
import Tabs from "../_core/components/tabs/tabs";
 import Pagination from "../_components/pagination/pagination";
import {Mobile, VipIcon} from "../_components/icons/icons";

const Page = () => {

  const handleChangePage = () => {

  }

  return (
    <div className={"container mx-auto mt-10"}>
      <div  className={"flex flex-col"}>
        <img src={"/banner2.jpg"}/>
        <div className={"mt-10"}>
          <Tabs/>
          <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg p-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className={"text-center"}>
                <th scope="col" className="px-6 py-3">
                  شماره
                </th>
                <th scope="col" className="px-6 py-3">
                  سطح ویژه
                </th>
                <th scope="col" className="px-6 py-3">
                  وضعیت
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت (تومان)
                </th>
                <th scope="col" className="px-6 py-3">
                  شرایط فروش
                </th>
                <th scope="col" className="px-6 py-3">
                  تماس با فروشنده
                </th>

              </tr>
              </thead>
              <tbody>
              <tr
                className="odd:bg-white   dark:border-gray-700 rounded-l border-[1px] rounded-[2.5rem]">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                  09330938099
                </th>
                <td className="px-6 py-4 flex justify-center">
                  <VipIcon/>
                </td>
                <td className="px-6 py-4 text-center">
                  در حد صفر
                </td>
                <td className="px-6 py-4 text-center">
                  148000000
                </td>
                <td className="px-6 py-4 text-center">
                  نقد
                </td>
                <td className="px-6 py-4 text-center">
                  <div className={"flex justify-center"}>
                    <a href={"tel:09330938099"} className={"bg-primary-500 max-w-[8.5rem] font-bold flex justify-between rounded-lg text-white p-2 items-center"}>
                      <span className={"ml-3"}>تماس</span>
                      <Mobile/>
                    </a>
                  </div>
                </td>
              </tr>
              <tr
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-[1px]  dark:border-gray-700 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                  09330938099
                </th>
                <td className="px-6 py-4 flex justify-center">
                  <VipIcon/>
                </td>
                <td className="px-6 py-4 text-center">
                  در حد صفر
                </td>
                <td className="px-6 py-4 text-center">
                  148000000
                </td>
                <td className="px-6 py-4 text-center">
                  نقد
                </td>
                <td className="px-6 py-4 text-center  ">
                  <div className={"flex justify-center"}>
                    <a href={"tel:09330938099"} className={"bg-primary-500 max-w-[8.5rem] font-bold flex justify-between rounded-lg text-white p-2 items-center"}>
                      <span className={"ml-3"}>تماس</span>
                      <Mobile/>
                    </a>
                  </div>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <Pagination  changePage={(page) => handleChangePage(page)}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
