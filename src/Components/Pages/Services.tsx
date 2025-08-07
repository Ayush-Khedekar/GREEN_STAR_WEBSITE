import React from "react";
import type { ServiceType } from "../OurService";
import { CiLocationOn, CiWallet } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import OurService from "../OurService";
import type { Business } from "../Company";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Company from "../Company";

const Services = () => {
  const ServiceData: ServiceType[] = [
    {
      Icons: <CiWallet />,
      Title: "Utility Bill  Payments Transfer",
    },
    {
      Icons: <FaGasPump />,
      Title: "Gas Bill",
    },
    {
      Icons: <TbHomeStats />,
      Title: "Electricity Bill",
    },
  ];
    const CompanyData: Business[] = [
    {
      Icons: <FaRegFaceSmileBeam />,
      Number: 209878,
      Title: "Happy Clients",
    },
    {
      Icons: <CiLocationOn />,
      Number: 5698,
      Title: "Locations",
    },
    {
      Icons: <IoReorderThree />,
      Number: 100098,
      Title: "Daily Transactions",
    },
    {
      Icons: <TfiArrowCircleRight />,
      Number: "12%",
      Title: "Business Growthrs",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 flex gap-3 uppercase">
        Our Service
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-start">
        {ServiceData.map((ServiceItem) => (
          <OurService ServiceProp={ServiceItem} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-5 bg-[#f5f5ff] gap-4">
        {CompanyData.map((CompanyItem) => (
          <Company companyTypes={CompanyItem} />
        ))}
      </div>
    </div>
  );
};

export default Services;
