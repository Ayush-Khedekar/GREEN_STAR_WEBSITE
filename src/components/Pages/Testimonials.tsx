import { useState } from "react";
import phoen from "../Images/cta-bg.jpg";
import Carousel from "./Carousel";
import { motion } from "motion/react";

type dataProps = {
  name: string;
  store: string;
  description: string;
};
const Testimonials = () => {
  const [data, _setData] = useState<dataProps[]>([
    {
      name: "Sara Saroj",
      store: "Homemaker",
      description:
        "I was a housewife, but with help of GreenStar now I have started earning from my mobile by recharging DTH and mobile of all the families in my neighbourhood. Thank you, Green Star.",
    },
    {
      name: "Suresh Shrama",
      store: "Shop keeper",
      description:
        "Green Star support is very helpful, they have resolved all my queries and they explain everything in a very simple and understandable manner.",
    },
    {
      name: "Rajesh Singh",
      store: "Store Owner",
      description:
        " My business has increased many folds with the help of Green Star, now I can manage all telecom operators with single login. Now I am able to give time to my family.",
    },
    {
      name: "Ramesh Gupta",
      store: "Store Owner",
      description:
        " With Green Star Utility bill, people of my village can easily do the theres utility bill pay, and in between I earn a good commission.",
    },
    {
      name: "Mr.JagatPal",
      store: "Store Owner",
      description:
        "My business has increased many folds with the help of Green Star, now I can manage all telecom operators with single login. Now I am able to give time to my family.",
    },
  ]);
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex justify-around items-center">
      <img
        src={phoen}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center blur-xs"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <motion.div
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, x: 500 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 flex justify-center items-center p-0 min-h-screen"
      >
        <Carousel
          CarouselData={data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-8 px-7 py-7 rounded-xl text-white bg-opacity-90 shadow-2xl border border-gray-200 max-w-md mx-auto transition-all duration-300 "
            >
              <div className="text-center w-full">
                <h3 className="text-2xl font-semibold ">{item.name}</h3>
                <h4 className="text-xl">{item.store}</h4>
              </div>

              <p className="italic relative pl-6 before:content-['-“'] before:absolute before:left-0 before:text-3xl before:text-green-500 after:content-['”'] after:text-green-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        />
      </motion.div>
    </section>
  );
};

export default Testimonials;
