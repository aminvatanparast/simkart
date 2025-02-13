import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img src={"/rond-logo.svg"}
                 className="w-32 mx-auto"/>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              ثبت حساب کاربری
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="string" placeholder="نام و نام خانوادگی"/>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="string" placeholder="موبایل"/>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="  پسورد"/>
                <button
                  className="mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <path d="M20 8v6M23 11h-6"/>
                  </svg>
                  <span className="ml-3">
                     ثبت نام
                   </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  حساب کاربری دارید ؟
                  <Link className={"mr-3"} href={"/auth/login"}>
                    ورود
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  text-center hidden lg:flex rounded-l-lg">
          <div className="  w-full bg-contain bg-center bg-no-repeat rounded-l-lg"
               style={{backgroundImage: "url('/2.jpg')", backgroundSize: "cover"}}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
