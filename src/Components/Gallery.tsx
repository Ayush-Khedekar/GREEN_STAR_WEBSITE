import React from "react";
import { images } from "../Constants/image/image-export";

const imagesArr = [
  images.imagTech2,
  images.imagTech1,
  images.imagTech3,
  images.imagTech4,
  images.imagTech5,
  images.imagTech6,
];
const Photo = () => {
  return (
    <>
      <p className="text-[#b0b0b0] font-bold px-2  text-4xl">GALLERY</p>
      <h1 className="text-[#010382]  sm:texty text-3xl font-bold ">
        Check our Gallery
      </h1>
      <div className="mx-auto flex flex-row flex-nowrap justify-center overflow-x-auto p-5 gap-4">
        {imagesArr.map((currImg, index) => (
          <div key={index} className="flex-none w-40 h-80 overflow-hidden">
            <img
              src={currImg}
              alt={`Image-${index}`}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Photo;
