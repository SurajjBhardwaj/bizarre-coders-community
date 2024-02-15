import React from "react";
import svg from '../assests/svg.svg'

const Main = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="flex mt-6 mx-12  gap-y-8  ">
        <div className="flex-1 p-10 break-all">
          <h1 className="text-blue-500 sm:flex hidden  sm:text-8xl font-bold">
            Eat <br />
            Sleep <br />
            Code. <br /> Repeat
          </h1>

          <p className="mt-6 sm:flex hidden font-semibold text-gray-500">
            {" "}
            Creating & helping best coding minds!
          </p>
          <button className="sm:flex hidden text-blue-500 font-bold  border-2 rounded-3xl p-2 border-blue-400 my-6 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all px-4">
            Explore
          </button>
        </div>
        <div className="flex-1 p-10 pt-28">
          <img
            className="rounded-md"
            width="700"
            src={svg}
            alt="coding_boy"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
