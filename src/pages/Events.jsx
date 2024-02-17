import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import megabeg from "../assests/MegaBeginners.png";

const Events = () => {
    if (!localStorage.getItem("authToken")) {
      return (
        <div className="flex flex-col justify-center place-items-center pt-12">
          <p>Please log in to view this content</p>
          <Link to="/loginuser">Go to Login</Link>
        </div>
      );
    }
    
  return (
    <>
      <Navbar />
    
        <div className=" ">
          <div className="grid justify-center py-6">
            <div className="bg-blue-100 p-2 rounded-md  grid justify-center w-48">
              <h1 className=" rounded-md text-center font-bold text-3xl  p-1  text-white bg-blue-400 w-44">
                Our Events
              </h1>
            </div>
          </div>
          <div className="flex mx-12 mt-28 gapx-x-3">
            <div className="flex-1 mx-2">
              <img src={megabeg} className="rounded-2xl" width="550" alt="" />
            </div>
            <div className="flex-1 mx-2  shadow-md hover:border border-blue-300 w-[550px] p-4 rounded-2xl transition-all ">
              <h1 className="font-bold text-3xl text-blue-500">
                MegaBeginner 2.0
              </h1>
              <p className="text-gray-400 text-lg tracking-wider font-light">
                Event
              </p>

              <div className="gap-x-3 mt-4">
                <button className="bg-blue-100 text-blue-400 font-semibold p-2 rounded-lg">
                  Android
                </button>
                <button className="bg-blue-100 text-blue-400 font-semibold ml-4 p-2 rounded-lg">
                  Web
                </button>
                <button className="bg-blue-100 text-blue-400 font-semibold ml-4 p-2 rounded-lg">
                  Artificial Intelligence
                </button>
              </div>
              <div className="top-full sticky gap-x-3">
                <button className="bg-gray-100 text-gray-600 font-semibold p-2 rounded-lg">
                  Offline
                </button>
                <button className="bg-gray-100 text-gray-600 font-semibold ml-4 p-2 rounded-lg">
                  Open
                </button>
                <button className="bg-gray-100 text-gray-600 font-semibold ml-4 p-2 rounded-lg">
                  STARTS 21/02/2021
                </button>
                <Link target="_saka" to="/regEvent">
                  {" "}
                  <button className="bg-blue-500 text-white font-semibold ml-36 p-2 px-4 rounded-lg hover:bg-blue-600">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Events;

/*

*/
