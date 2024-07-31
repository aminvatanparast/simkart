import React from 'react';
import Title from "../_components/title/title";
import CardMoreInformation from "../_components/cardMoreInformation/cardMoreInformation";

const Page = () => {
  return (
    <div className={"container mx-auto"}>
      <Title title={"راهنمای سیم کارت"}/>
      <CardMoreInformation link={"/SimHelp/1"} title={"راهنمای تنظیمات فروشگاه"}/>
      <CardMoreInformation link={"/SimHelp/2"} title={"راهنمای درج کادر فروشندگان ویژه"}/>
      <CardMoreInformation link={"/SimHelp/3"} title={" راهنمای جستجوی تلفن ثابت"}/>
      <CardMoreInformation link={"/SimHelp/4"} title={"راهنمای تنظیمات فروشگاه"}/>
      <CardMoreInformation link={"/SimHelp/5"} title={"راهنمای درج آگهی فروش تلفن ثابت"}/>
      <CardMoreInformation link={"/SimHelp/8"} title={"راهنمای تنظیمات فروشگاه"}/>
      <CardMoreInformation link={"/SimHelp/9"} title={"راهنمای تنظیمات فروشگاه"}/>
      <CardMoreInformation link={"/SimHelp/10"} title={"راهنمای تنظیمات فروشگاه"}/>
    </div>
  );
};

export default Page;
