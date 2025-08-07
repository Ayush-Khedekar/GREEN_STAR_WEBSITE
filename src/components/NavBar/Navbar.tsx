import { RxHamburgerMenu } from "react-icons/rx";
import Green_Star from "../Images/GREEN STAR LOGO.svg";
import NavBarItems from "./NavBarItems";
import { useState } from "react";
import Navigations from "./Navigations";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  function DropDown() {
    setShowDropDown((prev) => !prev);
  }
  return (
    <>
      <div className="flex justify-between items-center px-6 py-2">
        <img src={Green_Star} alt="Green star" className="sm:w-[25%] w-[40%]" />
        <div className="items-center justify-end hidden lg:block">
          <ul className="flex list-none">
            <Navigations />
          </ul>
        </div>
        <div className="lg:hidden flex relative items-center p-0 ">
          <button
            onClick={() => DropDown()}
            onBlur={() => DropDown()}
            className="text-2xl flex cursor-pointer"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
      {showDropDown && (
        <div
          className={`absolute z-10 top-0 right-0 leading-3.5 bg-white w-[60%] border rounded-[10px] py-3 px-4 delay-500 ease-in-out transition-all duration-500 overflow-y-auto h-[100vh] flex flex-col`}
        >
          <button
            className="ml-auto p text-[1.25rem] cursor-pointer"
            onClick={() => setShowDropDown(false)}
          >
            <IoClose />
          </button>
          <NavBarItems />
        </div>
      )}
    </>
  );
};

export default Navbar;
