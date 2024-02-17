import React from "react";
import svg from "../assests/svg.svg";

const Main = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="flex mt-20 sm:mt-6 mx-12  gap-y-8  ">
        <div className="justify-center place-items-center sm:flex-1 p-10 break-all">
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
        <div className="flex-1  justify-center sm:p-10 pt-10 p-4  sm:pt-28">
          <img
            className="rounded-md scale-[2] sm:scale-[1.2] -ml-6 sm:-ml-8"
            width="700"
            src={svg}
            alt="coding_boy"
          />
        </div>
      </div>
      <div className="sm:hidden grid justify-center place-items-center">
        <p className="sm:hidden mt-24 font-bold text-center text-3xl text-blue-400">
          Eat.Sleep.Code.Repeat
        </p>
        <p className="mt-6 sm:hidden font-semibold text-gray-500">
          {" "}
          Creating & helping best coding minds!
        </p>
        <button className=" sm:hidden text-blue-500 font-bold  border-2 rounded-3xl p-2 border-blue-400 my-6 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all px-4">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Main;
