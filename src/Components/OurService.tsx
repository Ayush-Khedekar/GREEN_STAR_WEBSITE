import React, { type ReactNode } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { RiGatsbyFill } from "react-icons/ri";
import { TbHomeStats, TbTransferOut } from "react-icons/tb";
import { TfiArrowCircleRight } from "react-icons/tfi";

export interface ServiceType {
  Icons: ReactNode;
  Title: string;
}

const OurService = ({ ServiceProp }: { ServiceProp: ServiceType }) => {
  return (
    <section className="bg-white text-center flex flex-row px-5 py-5">
      <div className="flex flex-row space-x-4 items-center">
        <div
          className="
        bg-[#F7F7FF] 
        px-4 py-4 
        flex space-x-3 items-center sm:flex-1/2
        shadow-md 
        border-2 border-[#026300] 
        transition-all duration-500 ease-in-out
        hover:border-[#F9BA14] hover:scale-105
        rounded-md
      "
        >
          {/* Icon */}
          <div className="text-[#F9BA14] text-2xl">{ServiceProp.Icons}</div>

          {/* Title */}
          <span className="font-bold text-[#026300] text-base transition-colors duration-300 hover:text-[#F9BA14]">
            {ServiceProp.Title}
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurService;
