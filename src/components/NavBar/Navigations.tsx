import { motion } from "framer-motion"; // Ensure 'framer-motion' installed

type Props = {
  onLinkClick: (id: string) => void;
  activeSection?: string;
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "terms-and-conditions", label: "Term & Condition" },
  { id: "contact", label: "Contact" },
  { id: "login", label: "Login" },
];

const Navigations = ({ onLinkClick, activeSection }: Props) => {
  console.log(activeSection, "cecse");
  return (
    <>
      {navItems.map((item) => (
        <motion.li
          whileInView={{ opacity: 1, x: 10 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={item.id}
          className={`relative group list-none ${
            activeSection == item.id ? "font-bold text-[#026300]" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(item.id);
          }}
        >
          <a
            href={`#${item.id}`}
            className={`flex items-center justify-between pl-[30px] md:text-[13px] py-[10px] text-[20px] xl:text-[18px] lg:text-[16px] 2xl:text-[20px] font-medium text-[#026300] hover:text-[#53b850] font-[Poppins] whitespace-nowrap transition duration-300 relative 
              before:content-[''] before:absolute before:bottom-[3px] before:left-[30px] before:h-[2px] before:w-0 ${
                activeSection === item.id ? "border-b border-[#F9BA14] text-white" : ""
              }before:bg-[#F9BA14] before:invisible before:transition-all before:duration-300 before:ease-in-out group-hover:before:visible group-hover:before:w-[25px]`}
          >
            {item.label}
          </a>
        </motion.li>
      ))}
    </>
  );
};

export default Navigations;
