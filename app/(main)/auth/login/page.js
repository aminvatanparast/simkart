import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img src={"/rond-logo.svg"}
                 class="w-32 mx-auto" />
          </div>
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold">
              ورود به حساب کاربری
            </h1>
            <div class="w-full flex-1 mt-8">
              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="شماره موبایل" />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="پسورد" />
                <button
                  class="mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">
                     ورود
                   </span>
                </button>
                <p class="mt-6 text-xs text-gray-600 text-center">
                  حساب کاربری ندارید ؟
                  <Link className={"mr-3"} href={"/auth/register"}>
                    ثبت نام
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1  text-center hidden lg:flex rounded-l-lg">
          <div class="  w-full bg-contain bg-center bg-no-repeat rounded-l-lg"
               style={{backgroundImage: "url('/3.jpg')" , backgroundSize: "cover"}}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
