import React from "react";
import { images } from "../Constants/image/image-export";
const { photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8 } =
  images;
const imagesArr = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
];
const Photo = () => {
  return (
    <>
      <p className="text-[#b0b0b0] font-bold px-2  text-2xl">GALLERY</p>
      <h1 className="text-[#010382]  sm:texty text-4xl font-bold ">Check our Gallery</h1>
      <div className="w-[90%] mx-auto flex flex-wrap justify-center items-stretch gap-2 p-5">
        {imagesArr.map((currImg) => (
          <div className="w-[23%] overflow-hidden">
            <img
              src={currImg}
              className="w-full hover:scale-125 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Photo;
