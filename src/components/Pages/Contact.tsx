import React from "react";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <div className="p-3 flex flex-col gap-2 bg-slate-200 w-full">
      <div className=" px-10 py-5 rounded-[10px] flex flex-col gap-5 ">
        <div className="text-gray-400 flex flex-col justify-start gap-2">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="w-[20%] flex justify-between text-center font-medium text-[1.2rem]"
          >
            Contact
            <span className="border border-yellow-400 rotate-90"></span>
          </motion.h2>
          <h1 className="text-3xl text-green-900 font-medium">CONTACT US</h1>
        </div>
        <div className="leading-9 text-[1.2rem]">
          <p className="text-green-800 font-medium">
            Green Star Private Limited
          </p>
          <p className="text-gray-600">
            Email us at{" "}
            <span className="text-red-500 font-medium">
              support@Green Star.com
            </span>
          </p>
          <p className="text-gray-600">Contact - +91 00000 00000</p>
          <p className="text-gray-600">
            Corporate Office
            <br></br>
            9th Floor, Office No 901,<br></br>
            Technocity Co Operative Housing Society Ltd, TTC Industrial Area,
            Plot No X5/3, Mahape, Navi Mumbai, Thane, Maharashtra, 400701
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
