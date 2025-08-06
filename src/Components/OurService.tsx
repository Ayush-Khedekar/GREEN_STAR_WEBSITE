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
    <>
      <section className="  bg-white text-center flex flex-row px-5 py-5">
        <div className="flex  flex-row">
          <div className="bg-[#F7F7FF] px-2 py-3  flex space-x-3 shadow-sm">
            <div className="text-yellow-500 text-2xl">{ServiceProp.Icons}</div>
            <span className="font-bold text-blue-900 text-sm">
              {ServiceProp.Title}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
