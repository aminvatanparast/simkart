import React from 'react';
import GitftLine from "../_components/giftLine/gitftLine";
import Title from "../_components/title/title";
import BlogBox from "../_components/blog/blogBox";
import Tel from "../_components/tel/tel";
import SingleItemNumber from "../_components/itemCard/singleItemNumber/singleItemNumber";
import Singleitem from "../_components/itemCard/singleitem/singleitem";
import {VipIcon} from "../_components/icons/icons";

const Page = () => {
  return (
    <div className={"container mx-auto"}>
      <div className={"grid grid-cols-1 md:grid-cols-4 md:grid-flow-col gap-y-4 md:gap-4 justify-between mt-10 "}>
        <div className={"flex flex-col gap-4"}>
          <div className={"border border-gray-200 rounded-lg shadow  p-4 max-h-[600px] bg-white grid grid-cols-1 gap-2 justify-between"}>
            <Title mt={0} pos={"center"} title={"رئال سیم ( RealSim )"}/>
            <div className={"flex justify-center items-center"}>
               <span className={"ml-3"}>
                 بهترین خریدار
               </span>
              <VipIcon/>
            </div>
          </div>
          <div className={"border border-gray-200 rounded-lg shadow  p-4 max-h-[600px] bg-white grid grid-cols-1 gap-2 justify-between"}>
            <Title mt={0} title={"سایت اختصاصی فروشگاه"}/>
            <div className={"p-4 pt-1"}>
              <a href={"https://simreal.rond.ir"}>
                <button type="button"
                        className="text-white bg-orange-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                  {"https://simreal.rond.ir"}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow  p-4 flex gap-5 flex-wrap">
             <Tel tel={"0912555555"}/>
             <Tel tel={"091243534555"}/>
             <Tel tel={"0912544555"}/>
             <Tel tel={"091233555"}/>
             <Tel tel={"091252555"}/>
             <Tel tel={"0912555555"}/>
             <Tel tel={"0912522255"}/>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow  p-4 ">
              <Title title={"سایر آگهی‌های این فروشگاه"} mt={0}/>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow  p-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 ">
              <Singleitem/>
              <Singleitem/>
              <Singleitem/>
              <Singleitem/>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow  p-4 ">
            <Title title={"بروزترین سیم‌کارت‌های فروشگاه"} mt={0}/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
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

export default Page;
