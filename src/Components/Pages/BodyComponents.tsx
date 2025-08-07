import { FaForward, FaGasPump, FaRegLaugh } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { TbHomeStats, TbTransferOut } from "react-icons/tb";
import { IoReorderThree } from "react-icons/io5";
import { CiLocationOn, CiWallet } from "react-icons/ci";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import type { NewCard } from "../Icon_Component";
import type { ServiceType } from "../OurService";
import type { Business } from "../Company";
import OurMission from "../OurMission";
import Icon_Component from "../Icon_Component";
import { images } from "../../Constants/image/image-export";
import OurService from "../OurService";
import Company from "../Company";
import Photo from "../Gallery";


const BodyComponents = () => {
  const data: NewCard[] = [
    {
      Icons: <FaRegLaugh />,
      Title: "Quality Guaranteed",
      Description:
        "SoliTeck's in-house technical team ensures non-stop delivery of services. You do not have to worry about it anymore.",
    },
    {
      Icons: <FaForward />,
      Title: "Fastest Servers",
      Description:
        "Backend of SoliTeck is completely based on cloud technology installed on fastest servers in the world.",
    },
    {
      Icons: <BiMoney />,
      Title: "Safety Guaranteed",
      Description:
        "Your bill payments is safe with us, we are following all the security and accountaing compliance to make it sure",
    },
  ];

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
    <>
      <div className="flex flex-col lg:flex-row w-auto items-center px-4 py-8 gap-5">
        {/* left side */}
        <div className="w-full  flex flex-col  gap-10">
          <div></div>
          <OurMission />
          <div className="flex flex-col gap-4 ">
            {data.map((item) => (
              <Icon_Component CardProp={item} />
            ))}
          </div>
        </div>
      </div>

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

      <Photo />
    </>
  );
};

export default BodyComponents;
