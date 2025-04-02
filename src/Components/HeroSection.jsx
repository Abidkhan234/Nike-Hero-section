import React from "react";

const HeroSection = () => {
  return (
    <div className="px-5 mt-2">
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-6 col-span-12 lg:order-1 order-2">
          <div className="flex flex-col gap-5 lg:items-start items-center lg:text-start text-center">
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold lg:leading-25 text-balance">
              YOUR FEET DESERVE THE BEST
            </h1>
            <p className="font-semibold leading-6 text-[#5A5959] sm:max-w-[60%] text-sm md:text-base text-balance">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="flex gap-5 flex-wrap justify-center">
              <button className="px-4 py-1 bg-[#D01C28] text-white font-semibold text-lg rounded-sm cursor-pointer">
                Shop Now
              </button>
              <button className="px-4 py-1 text-[#5A5959] border-2 border-[#D01C28] font-semibold text-lg rounded-sm cursor-pointer">
                Category
              </button>
            </div>
            <div className="">
              <p className="text-[#5A5959] font-semibold">Also Available On</p>
              <div className="flex gap-5 mt-2.5 lg:justify-start justify-center">
                <img src="public\Images\amazon.png" alt="" />
                <img src="public\Images\flipkart.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 flex justify-center items-center lg:order-2 order-1 lg:content-start content-center">
          <img
            src="public\Images\shoe_image.png"
            className="max-[992px]:max-w-[50%] max-[425px]:max-w-full max-w-full h-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
