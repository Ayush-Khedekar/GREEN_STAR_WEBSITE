const Navigations = () => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Privacy Policy",
    "Term & Condition",
    "Contact",
    "Login",
  ];
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className="relative group list-none">
          <a
            href="#"
            className="flex items-center justify-between pl-[30px] md:text-[13px] py-[10px] text-[20px] xl:text-[18px] lg:text-[16px] 2xl:text-[20px] font-medium text-[#026300] hover:text-[#53b850] font-[Poppins] whitespace-nowrap transition duration-300 relative 
                before:content-[''] before:absolute before:bottom-[3px] before:left-[30px] before:h-[2px] before:w-0 before:bg-[#F9BA14] before:invisible 
                before:transition-all before:duration-300 before:ease-in-out
                group-hover:before:visible group-hover:before:w-[25px]"
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};

export default Navigations;
