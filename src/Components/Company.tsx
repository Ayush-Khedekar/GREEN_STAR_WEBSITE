import React, { type ReactNode } from "react";
import { IoReorderThree } from "react-icons/io5";
export interface Business {
  Icons: ReactNode;
  Number: number | string;
  Title: string;
}

const Company = ({ companyTypes }: { companyTypes: Business }) => {
  return (
    <div className="w-full">
      <div className="z-10 mx-auto translate-y-[50%] w-12 h-12 bg-emerald-400 text-white rounded-full flex items-center justify-center text-xl">
        {companyTypes.Icons}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm text-center w-full ">
        <p className="font-bold text-gray-900">{companyTypes.Number}</p>
        <p className="text-gray-500 text-sm">{companyTypes.Title}</p>
      </div>
    </div>
  );
};

export default Company;
