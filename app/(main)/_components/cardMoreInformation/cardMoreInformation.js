import React from 'react';
import Link from "next/link";

const CardMoreInformation = ({title , link}) => {
  return (
    <Link href={`${link}`}>
      <div  className="bg-white border border-gray-200 rounded-lg shadow  p-4  flex justify-between cursor-pointer mb-4">
        <div className={"flex"}>
          <svg className="w-6 h-6 text-orange-500 dark:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
          </svg>

          <span className={"mr-3 font-bold"}>{title}</span>

        </div>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
        </svg>

      </div>
    </Link>
  );
};

export default CardMoreInformation;
