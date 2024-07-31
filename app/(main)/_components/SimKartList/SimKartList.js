import React from 'react';
import Tabs from "../../_core/components/tabs/tabs";
import {Mobile, VipIcon} from "../icons/icons";

const SimKartList = () => {
  return (
    <div className={"mt-10"}>
      <Tabs title/>


      <div className="w-full bg-white border border-gray-200 rounded-lg shadow  ">
        <ul
          className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50   "
          id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
          <li className="me-2">
            <button id="all-tab" data-tabs-target="#all" type="button" role="tab" aria-controls="all"
                    aria-selected="true"
                    className="inline-block p-4 pb-0 pl-2 text-blue-600 rounded-ss-lg hover:bg-gray-100   ">
              <li className="me-2 border-b-4 border-orange-500">
                <a href="#" aria-current="page"
                   className="inline-block p-2 text-white bg-primary-500 rounded-t-2xl active dark:bg-gray-800 dark:text-blue-500">همه</a>
              </li>
            </button>

          </li>

        </ul>
        <div id="defaultTabContent">
          <div className="hidden bg-white rounded-lg " id="all" role="tabpanel"
               aria-labelledby="about-tab">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 pt-0">
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
                <div className={"m-4"}/>
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
                <div className={"m-4"}/>
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
                  <td className="px-6 py-4 text-center">
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

          </div>

        </div>

      </div>

    </div>
  );
};

export default SimKartList;
