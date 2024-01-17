import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full ">
      <nav className="w-full flex justify-between p-3 sm:p-4">
        <h1 className="text-sm font-light sm:text-2xl text-white z-100  ">
          Bizarre <span className="font-bold text-white">Coders</span>
        </h1>
        <div className="gap-x-3">
          <button className="mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">
            Resources
          </button>
          {/* <button className="mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">Courses</button> */}
        

        
          <button className="mx-2 p-1 text-white px-3 hover:opacity-70 btn font-bold">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
