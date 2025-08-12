import React from "react";
import { ReactTyped, Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-cyan-500 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-cyan-500"
            strings={["XAUUSD", "GPBUSD", "JPYUSD"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi vel laboriosam officia?</p>
        <button className="bg-cyan-500 w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
