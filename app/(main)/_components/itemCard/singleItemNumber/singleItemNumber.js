import React from 'react';
import {VipIcon} from "../../icons/icons";

const SingleItemNumber = ({color = "bg-orange-500"}) => {
  return (


    <div
      className=" max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className={`mb-1 ${color} text-center bg-primary-500 text-white rounded-t-lg text-sm font-medium px-4 py-2 dark:text-gray-400 flex justify-between items-center`}>
        پیشخوان عطایی
        <span
          className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">
           <VipIcon/>
          </span>
      </h5>
      <div className={"text-center mt-4"}>
        <span>
        33,5555555 تومان
      </span>
      </div>
      <ul role="list" className="space-y-1 my-3 mx-4 py-2 flex flex-col min-h-30 justify-center text-center items-center bg-gray-100 rounded-lg">

        <li className="flex">
          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">09330938099</span>
        </li>
        <li className="flex">
          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">09035824410</span>
        </li>
        <li className="flex">
          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">091222222222</span>
        </li>
        <li className="flex">
          <span
            className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ">091255448484</span>
        </li>

      </ul>
      <div className={"p-4 pt-1"}>
        <button type="button"
                className="text-white bg-orange-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          تماس با فروشنده
        </button>
      </div>
    </div>

  );
};

export default SingleItemNumber;
